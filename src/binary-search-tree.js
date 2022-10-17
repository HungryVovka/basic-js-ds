const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(info){
    this.info = info;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.binroot = null;
  }

  root(){
    return this.binroot ? this.binroot : null;
  }

  add(info) {
    this.binroot = insertNode(this.binroot, info);

    function insertNode(node, info){
      if (!node){
        return new Node(info);
      }
      if (node.info === info){
        return node;
      }
      if (info < node.info){
        node.left = insertNode(node.left, info);
      } else {
        node.right = insertNode(node.right, info);
      }
      return node;
    }
  }

  has(info) {
    return searchWithIn(this.binroot, info);

    function searchWithIn(node, info){
      if (!node){
        return false;
      }
      if (node.info === info){
        return true;
      }
      return node.info > info ? searchWithIn(node.left, info) : searchWithIn(node.right, info);
    }
  }

  find(info) {
    return findData(this.binroot, info);

    function findData(node, info){
      if (!node){
        return node;
      }
      if (node.info === info){
        return node;
      }
      return node.info < info ? findData(node.right, info) : findData(node.left, info);
    }
  }

  remove(info) {
    this.binroot = removeNode(this.binroot, info);
    function removeNode(node, info){
      if (!node) {
        return null;
      }
      if (info < node.info){
        node.left = removeNode(node.left, info);
        return node;
      } else if (node.info < info){
        node.right = removeNode(node.right, info);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          node = node.right;
          return node;
        }
        if (!node.right){
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.info = minFromRight.info;
        node.right = removeNode(node.right, minFromRight.info);
        return node;
      }
    }
  }
  
  min() {
    if (!this.binroot){
      return "no elements in tree"
    }
    let node = this.binroot;
    while (node.left){
      node = node.left;
    }
    return node.info;
  }

  max() {
    if (!this.binroot) {
      return "no elements in tree";
    }
    let node = this.binroot;
    while (node.right){
      node = node.right;
    }
    return node.info;
  }
}

module.exports = {
  BinarySearchTree
};
