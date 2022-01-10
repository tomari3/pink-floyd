function myFunction()
{
x=document.getElementsByClassName("img_desc");  // Find the element
        console.log(x)
        for(var i = 0; i < x.length; i++){
        x[i].innerText="Hello JavaScript!";    // Change the content
        }

}
window.onload = myFunction;
