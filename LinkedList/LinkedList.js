// class List{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null
//         }
//         this.tail=this.head 
//         this.size=1
//     }
//     appendNode(nodedata){
//         let newNode={
//             value:nodedata,
//             next:null
//         }
//         this.tail.next=newNode;
//         this.tail=newNode
//         this.size+=1;
//     }

// }
// let list=new List(200);
//  list.appendNode(400);
// list.appendNode(500);
// list.appendNode(600);
// list.appendNode(700);
// list.appendNode(800);
// list.appendNode(900);
// console.log(list)






// traversing a linked List

class LinkedListTravesing{
      constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head;
        this.size=1;

      }
      appendNode(nodeData){
      let newOne={
        value:nodeData,
       next:null
      }
      this.tail.next=newOne ;
      this.tail=newOne
      this.size+=1;

      }


      traversing(){
       let counter=0;
       let currentNode=this.head;
       while(currentNode !=null){
           console.log(currentNode.value)
           currentNode=currentNode.next
        counter ++
       }
      }
}
let nodeList=new LinkedListTravesing()
nodeList.appendNode(100);
nodeList.appendNode(200)
nodeList.appendNode(300)
nodeList.appendNode(400)
nodeList.appendNode(500)
nodeList.traversing()