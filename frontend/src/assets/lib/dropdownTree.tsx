import React, { useState } from "react";
import { LucideIcons } from "./lucideIcons";

type TreeNode = {
  label: string;
  link?: string;
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
          <TreeItem
            key={`${node.label}-${index}`}
            node={node}
            level={level}
            index={index}
          />
        ))}
      </ul>
    );
  };

  const TreeItem: React.FC<{
    node: TreeNode;
    level: number;
    index: number;
  }> = ({ node, level, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.children && node.children.length > 0;
    const submenuId = `submenu-${level}-${index}`;

    const toggleOpen = () => {
      if (hasChildren) {
        setIsOpen((prev) => !prev);
      }
    };

    /* style={{ paddingLeft: `${level * 20}px` }} */
    return (
      <li
        className="tree-item"
      >
        {node.link ? (
          <a href={node.link} className="tree-link">
            {node.label}
          </a>
        ) : (
          <>
            <button className="tree-toggle" onClick={toggleOpen} aria-expanded={isOpen} aria-controls={submenuId}>
              {node.label}
              <LucideIcons.chevronRight aria-hidden="true" className={`arrow ${isOpen ? "open" : ""}`}/>
            </button>
            {hasChildren && isOpen && (
              <ul id={submenuId}>
                {node.children!.map((child, childIndex) => (
                  <TreeItem
                    key={`${child.label}-${childIndex}`}
                    node={child}
                    level={level + 1}
                    index={childIndex}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </li>
    );
  };

  return (
    <aside className="contentTable">
      <nav aria-label="Table of contents">
        <h2>Contents</h2>
        {renderTree(data)}
      </nav>
    </aside>
  );
};

export default DropdownTree;
