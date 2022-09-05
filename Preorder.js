class Node{
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }
} 
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node, newNode) {
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    preOrder(){
        function preOderTraversal(root) {
            if(root !== null){
                console.log(root.data);
                preOderTraversal(root.left);
                preOderTraversal(root.right);
            }
        }

    }
       
};


const Binary = new BinarySearchTree();
Binary.insert(1);
Binary.insert(221);
Binary.insert(33);
Binary.insert(11);
Binary.preOrder();
