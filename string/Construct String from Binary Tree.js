var tree2str = function(t) {
   

    if(t==null){
        return ''
    }
 function sort(s){
	str+=s.val
	if(s.left){
		str+='('
		sort(s.left)
	}
	if(s.right){
        if(!s.left){
           str+='()'
		
        }
		str+='('
		sort(s.right)
	}
	str+=')'
}
var str=''
sort(t)
return str.slice(0,str.length-1)
    
};

//beat 66.7%   开始以为要自己通过数组构建树，，，，一顿提交老是报错，，要崩溃，，，，一打印，，，原来传入参数已经是二叉树了。。。。。

//顺便贴上构建二叉树的js代码

var tree2str = function(t) {

function Node() {        //节点    树的节点
    this.text = '';       //节点的文本
    this.leftChild = null;    //节点的左孩子引用
    this.rightChild = null;     //节点右孩子引用
  }

var nodes=[]
    
for (var i = 0 ; i < t.length ; i++) {
    var node = new Node();
    node.text = t[i];
    nodes.push(node);
  }

//创建树函数     循环遍历
function buildtree(){
        var index=0;
        while(index<t.length){
            var leftnum=2*index+1
            var rightnum=2*index+2
            if(leftnum<t.length){
                nodes[index].leftChild=nodes[leftnum]
            }
            if(rightnum<t.length){
                nodes[index].rightChild=nodes[rightnum]
            }
            index++
        }
        
    }

buildtree()//执行


//2.1递归实现：
  function buildtree1(node, i) {
    var leftnum = 2*i+1,             //左孩子节点的索引
     var  rightnum = 2*i+2;             //右孩子节点的索引
    if(leftnum < t.length) {       //判断索引的长度是否超过了charecters数组的大小
      var childNode = new Node();         //创建一个新的节点对象
      childNode.text = t[leftnum];   //给节点赋值
      node.leftChild = childNode;         //给当前节点node加入左孩子节点
      buildtree1(childNode, leftnum);      //递归创建左孩子
    }
    if(rightnum < t.length) {      //同上
      var childNode = new Node();
      childNode.text = t[rightnum];
      node.rightChild = childNode;
      buildtree1(childNode, rightnum);
    }
  }


//先序遍历，，，，每个子节点用“（）”包住
var str=''
function sort(s){
	str+=s.text=='null'?'':s.text
	if(s.leftChild){
		str+='('
		sort(s.leftChild)
	}
	if(s.rightChild){
		str+='('
		sort(s.rightChild)
	}
	str+=')'
}
sort(nodes[0])

//中序遍历

function sort(s){
	if(s.leftChild){
		sort(s.leftChild)
	}
	str+=s.text
	if(s.rightChild){
		sort(s.rightChild)
	}
}

//后序遍历

function sort(s){
	if(s.leftChild){
		sort(s.leftChild)
	}
	if(s.rightChild){
		sort(s.rightChild)
	}
	str+=s.text
}


}