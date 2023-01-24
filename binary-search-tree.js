class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let currNode = this.root;

    while (currNode) {
      // console.log("VISITING", currNode.val)

      if (currNode.val > val) {
        if (currNode.left === null) {
          currNode.left = new Node(val);
          return this;
        } else {
          currNode = currNode.left
        }
      } else if (currNode.val < val) {
        if (currNode.right === null) {
          currNode.right = new Node(val);
          return this;
        } else {
          currNode = currNode.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (currNode.val > val) {
      // if there's no left node, set the val to the left node
      if (currNode.left === null) {
        currNode.left = new Node(val);
        return this;
      }
      // otherwise go through again with the current node set as the left node
      return this.insertRecursively(val, currNode.left);
    } else {
      // do the same thing for the right side if the value is larger
      if (currNode.right === null) {
        currNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === val) {
      return this.root;
    }

    let currNode = this.root;

    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      }
      // console.log("VISITING", currNode.val)

      if (currNode.val > val) {
        currNode = currNode.left
      } else {
        currNode = currNode.right
      }
    }
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (this.root === null) {
      return undefined;
    }

    if (currNode.val === val) {
      return currNode;
    }

    if (currNode.val > val) {

      if (currNode.left === null) {
        return undefined
      }
      return this.findRecursively(val, currNode.left);
    } else if (currNode.val < val) {
      if (currNode.right === null) {
        return undefined
      }
      return this.findRecursively(val, currNode.right);

    }
    return currNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  // pre-order, look at myself first then left then right
  dfsPreOrder() {
    let arr = []
    let currNode = this.root;

    function traverse(node) {
      // push the value onto the array
      arr.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(currNode)
    return arr;

  }
  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  // in order: look at left, myself, then right
  dfsInOrder() {
    let arr = []
    let currNode = this.root;

    function traverse(node) {

      if (node.left) traverse(node.left)
      arr.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(currNode)
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  // post order: look left, right, then at myself
  dfsPostOrder() {
    let arr = []
    let currNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      arr.push(node.val)
    }

    traverse(currNode)
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let queue = [];
    let arr = []

    // console.log("root", node)

    queue.push(node);

    // console.log("queue", queue)

    // while we have things in the queue
    while (queue.length) {
      node = queue.shift();
      arr.push(node.val)
      // console.log("array", arr)

      // look left, then right put them on the queue to add to the array
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return arr;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
