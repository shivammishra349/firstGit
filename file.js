var form=document.getElementById('addform');
var item=document.getElementById('items');

form.addEventListener('submit',additem)

item.addEventListener('click',removeItem)

function additem(e){
   e.preventDefault();
    

  let newItem=document.getElementById('item').value;

  let li=document.createElement('li');
  li.className="list-group-item";
  

  li.appendChild(document.createTextNode(newItem))

  item.appendChild(li)

  //delete button
  let deletebtn=document.createElement('button');
  deletebtn.className='btn btn-danger btn-sm float-right delete'
  deletebtn.className='btn btn-danger btn-sm float-right'

  deletebtn.appendChild(document.createTextNode('X'));
  deletebtn.appendChild(document.createTextNode('edit'));

  li.appendChild(deletebtn)
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure wants to delete')){
      li=e.target.parentElement;
      item.removeChild  (li)
    }
  }
}