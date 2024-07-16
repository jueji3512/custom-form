import {FC, ReactNode, useState} from "react";
import {FixedSizeList} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";

export interface IVirtualTreeNode {
  index: number
  key: string
  style: object
}

export interface IVirtualTreeProps {
  data: any[]
  item: (node: any) => ReactNode
}

type sizeType = {
  height: number
  width: number
}

const VirtualTree: FC<IVirtualTreeProps> = (props) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const {
    data,
    item
  } = props

  function toggleNode(nodeId: number) {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  }

  function flattenTree(nodes: any[], depth = 0) {
    let flatNodes: any[] = []
    nodes.forEach((node: any) => {
      flatNodes.push({...node, depth});
      if (expandedNodes.has(node.id) && node.children) {
        flatNodes = flatNodes.concat(flattenTree(node.children, depth + 1));
      }
    });
    return flatNodes;
  }

  const flattenedData = flattenTree(data);
  const VirtualTreeNode: FC<IVirtualTreeNode> = ({index, style}) => {
    const node = flattenedData[index]
    let icon = 'pr-[6px] text-[8px] iconfont'
    icon += expandedNodes.has(node.id) ? ' icon-arrow-down-fill' : ' icon-arrow-right-fill'
    const marginLeft = 8 + node.depth * 16 + (node.children ? 0 : 14)
    return (
      <div
        style={style}
        className="flex items-center"
      >
        <div
          className="flex-1 flex items-center pr-1 hover:bg-container-bg-hover-light dark:hover:bg-container-bg-hover-dark rounded"
          style={{paddingLeft: marginLeft}}
          onClick={() => toggleNode(node.id)}
        >
          {
            node.children && (
              <i className={icon} />
            )
          }
          <div className="flex-1">
            {item(node)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <AutoSizer>
      {
        ({height, width}: sizeType) => (
          <FixedSizeList
            layout="vertical"
            width={width}
            height={height}
            itemCount={flattenedData.length}
            itemSize={32}
          >
            {VirtualTreeNode}
          </FixedSizeList>
        )
      }
    </AutoSizer>
  )
}

export default VirtualTree