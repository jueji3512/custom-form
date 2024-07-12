import {CSSProperties, FC, MouseEvent, ReactNode, UIEvent, useEffect, useMemo, useRef, useState} from "react";
import debounce from 'lodash/debounce'

type ScrollWrapperProps = FC<{
  children: ReactNode,
  height: number
  scrollbarPosition?: 'right' | "left",
}>
const ScrollWrapper: ScrollWrapperProps = ({children, height, scrollbarPosition = "right",}) => {
  const innerRef = useRef<HTMLDivElement>(null)
  const scrollbarWrapperRef = useRef<HTMLDivElement>(null)
  const scrollbarWidthRef = useRef<number | null>(0)
  const startScrollbarPositionRef = useRef<number | null>(0)
  const startMousePositionRef = useRef<number | null>(0)

  const [visible, setVisible] = useState(false)
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const debounceDrag = useMemo(
    () => debounce(() => {
      setIsDragging(false)
    }, 500),
    [])

  useEffect(() => {
    if (!innerRef.current) {
      return
    }
    const scrolledEl: HTMLDivElement = innerRef.current
    const contentHeight = scrolledEl.scrollHeight
    const viewHeight = scrolledEl.clientHeight
    scrollbarWidthRef.current = scrolledEl.offsetWidth - scrolledEl.clientWidth
    const needScrollbar = contentHeight > viewHeight
    if (needScrollbar) {
      setHasScrollbar(needScrollbar)
    }
    return () => {
      debounceDrag.cancel()
    }
  }, [debounceDrag]);

  function getScrollInnerStyle() {
    const marginPosition = scrollbarPosition === 'left' ? 'marginLeft' : 'marginRight'
    const style: CSSProperties = {
      userSelect: hasScrollbar ? 'none' : 'auto',
    }
    style[marginPosition] = scrollbarWidthRef.current ? -1 * scrollbarWidthRef.current : 0
    return style
  }
  function getScrollbarWrapperStyle() {
    if (!innerRef.current) {
      return {}
    }
    const scrolledEl: HTMLDivElement = innerRef.current
    const scrollRatio = scrolledEl.scrollHeight ? (scrolledEl.clientHeight / scrolledEl.scrollHeight) : 1
    const scrollbarWrapperPosition = scrollPosition * scrollRatio
    return {
      height: scrolledEl.clientHeight * scrollRatio,
      top: scrollbarWrapperPosition
    }
  }

  function getScrollbarClass() {
    let className = "h-full absolute w-[6px] z-[1] transition-opacity duration-500 pointer-events-none"
    if (scrollbarPosition === 'left') {
      className += " left-[3px] right-auto"
    } else {
      className += " right-[3px]"
    }
    if (visible || isDragging) {
      className += " opacity-100 duration-200"
    } else {
      className += " opacity-0"
    }
    return className
  }

  function isMouseOnTheScrollbar(e: MouseEvent) {
    if (!scrollbarWrapperRef.current) {
      return false
    }
    const scrollbarRect = scrollbarWrapperRef.current.getBoundingClientRect()
    return e.clientX > scrollbarRect.left &&
      e.clientX < scrollbarRect.right &&
      e.clientY > scrollbarRect.top &&
      e.clientY < scrollbarRect.top + scrollbarRect.height;
  }

  function handleTouchStart() {
    if (isDragging) {
      return
    }
    setIsDragging(true)
  }

  function handleMouseDown(e: MouseEvent) {
    if (!hasScrollbar || !isMouseOnTheScrollbar(e)) {
      return
    }
    startScrollbarPositionRef.current = getScrollbarWrapperStyle().top || 0
    startMousePositionRef.current = e.pageY
    setIsDragging(true)
    // @ts-expect-error problem typing event handlers
    document.addEventListener('mousemove', handleDrag, { passive: false })
    // @ts-expect-error problem typing event handlers
    document.addEventListener('mouseup', handleDragEnd, { passive: false })
  }
  function handleDrag(e: MouseEvent) {
    e.preventDefault()
    if (startMousePositionRef.current === null || startScrollbarPositionRef.current === null) return
    const moveY = e.pageY - startMousePositionRef.current
    const distanceY = startScrollbarPositionRef.current + moveY
    if (!scrollbarWrapperRef.current || !innerRef.current) {
      return
    }
    const scrolledEl = innerRef.current
    const scrollbarWrapperEl = scrollbarWrapperRef.current
    const totalY = scrolledEl.clientHeight - scrollbarWrapperEl.clientHeight
    const scrollRatio = scrolledEl.scrollHeight ? (scrolledEl.clientHeight / scrolledEl.scrollHeight) : 1

    const getPositionY = (value: number, min: number, max: number) => {
      if (value <= min) {
        return min
      } else if (value > max) {
        return max
      } else {
        return value
      }
    }
    const positionY = getPositionY(distanceY, 0, totalY)
    setScrollPosition(positionY / scrollRatio)
    innerRef.current.scrollTop = getPositionY(positionY / scrollRatio, 0, scrolledEl.scrollHeight - scrolledEl.clientHeight)
  }
  function handleDragEnd(e: MouseEvent) {
    setIsDragging(false)
    e.preventDefault()
    // @ts-expect-error problem typing event handlers
    document.removeEventListener('mousemove', handleDrag)
    // @ts-expect-error problem typing event handlers
    document.removeEventListener('mouseup', handleDragEnd)
  }

  function handleMouseEnter() {
    if (visible) {
      return
    }
    setVisible(true)
  }

  function handleMouseLeave() {
    if (!visible) {
      return
    }
    setVisible(false)
  }

  function handleClick(e: MouseEvent) {
    e.preventDefault()
  }

  function handleScroll(e: UIEvent) {
    const scrollPosition = e.currentTarget.scrollTop
    debounceDrag()
    setScrollPosition(scrollPosition)
  }

  const scrollbarClass = getScrollbarClass()
  const innerStyle = getScrollInnerStyle()
  const scrollbarWrapperStyle = getScrollbarWrapperStyle()
  const childrenWrapperStyle = {
    height
  }

  return (
    <div className="min-h-0 min-w-0">
      <div
        className="overflow-hidden h-full"
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {
          hasScrollbar ? (
            <div className="relative">
              <div
                className={scrollbarClass}
              >
                <div
                  ref={scrollbarWrapperRef}
                  className="absolute w-full top-0"
                  style={scrollbarWrapperStyle}
                >
                  <div className="h-[calc(100%-12px)] mt-[6px] bg-stone-500 rounded"></div>
                </div>
              </div>
            </div>
          ) : null
        }
        <div
          ref={innerRef}
          className="h-full overflow-x-hidden overflow-y-auto"
          style={innerStyle}
          onScroll={handleScroll}
        >
          <div
            className="overflow-y-visible"
          >
            <div style={childrenWrapperStyle}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollWrapper;