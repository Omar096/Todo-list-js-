const form =document.querySelector('.add');
const ulists = document.querySelector('ul');
const remove =document.querySelector('.far');
//trim to remove spaces
//adding to list
const GenerateHtml=(todo)=>{
  const newHtml=`<li class="list-group-item d-flex justify-content-between align-items-center"> 
  <span>${todo}</span>
  <i class="far fas fa-trash delete"></i>
</li>`;
ulists.innerHTML+=newHtml;
}
 form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const todo =form.add.value.trim();
  if(todo.length){
  GenerateHtml(todo);
  form.reset();
  }   
 });
 //
 //removing from list

 ulists.addEventListener('click',e=>{
   e.preventDefault();
   if(e.target.classList.contains('delete'))
   e.target.parentElement.remove();

 })
  //searching
  const search=document.querySelector('.search input')
  const span=document.querySelector('.x')

const filterTerms=(term)=>{
  Array.from(ulists.children)
  .filter((item)=>!item.textContent.toLowerCase().includes(term))
  .forEach((item)=>item.classList.add('filtered'))

  Array.from(ulists.children)
  .filter((item)=>item.textContent.toLowerCase().includes(term))
  .forEach((item)=>item.classList.remove('filtered'))


};


  search.addEventListener('keyup',e=>{
    e.preventDefault()
    const term=search.value.trim().toLowerCase();
    filterTerms(term);
  })