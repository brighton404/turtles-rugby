import React, { useState } from "react";

type TreeNode = {
  label: string;
  link?: string; // Optional link to section
  children?: TreeNode[];
};

type DropdownTreeProps = {
  data: TreeNode[];
};

const DropdownTree: React.FC<DropdownTreeProps> = ({ data }) => {
  const renderTree = (nodes: TreeNode[], level = 0) => {
    return (
      <ul className="dropdown-tree">
        {nodes.map((node, index) => (
          <TreeItem key={`${node.label}-${index}`} node={node} level={level} />
        ))}
      </ul>
    );
  };

  const TreeItem: React.FC<{ node: TreeNode; level: number }> = ({
    node,
    level,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      if (!node.link) {
        setIsOpen((prev) => !prev);
      }
    };

    return (
      <li className="tree-item" style={{ paddingLeft: `${level * 20}px` }}>
        <div className="tree-label">
          {node.children && (
            <span
              className={`arrow ${isOpen ? "open" : ""}`}
              onClick={toggleOpen}
            >
              ▶
            </span>
          )}
          {node.link ? (
            <a href={node.link} className="tree-link">
              {node.label}
            </a>
          ) : (
            <span onClick={toggleOpen}>{node.label}</span>
          )}
        </div>
        {isOpen && node.children && renderTree(node.children, level + 1)}
      </li>
    );
  };

  return <div className="dropdown-container">{renderTree(data)}</div>;
};

export default DropdownTree;
