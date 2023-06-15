

let p=document.createElement('p');
  p.id="demo";
  p.style.color="blue"
  p.style.display="flex"
  p.style.height="100vh"
  p.style.justifyContent="center";
  p.style.alignItems="center";
  p.style.fontSize="70px";
  p.style.fontFamily="Arial, Helvetica, sans-serif";
  p.style.fontWeight="800"
document.body.append(p)
function callbackhell(){
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>10</i>';
        document.getElementById('demo').style.color="red";
        document.getElementById('demo').style.background="linear-gradient(orange,white,white)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>9</i>';
        document.getElementById('demo').style.color="blue";
        document.getElementById('demo').style.background="linear-gradient(white,white,green)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>8</i>';
        document.getElementById('demo').style.color="green";
        document.getElementById('demo').style.background="linear-gradient(orange,white,white)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>7</i>';
        document.getElementById('demo').style.color="yellow";
        document.getElementById('demo').style.background="linear-gradient(white,white,green)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>6</i>';
        document.getElementById('demo').style.color="orange";
        document.getElementById('demo').style.background="linear-gradient(orange,white,white)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>5</i>';
        document.getElementById('demo').style.color="pink";
        document.getElementById('demo').style.background="linear-gradient(white,white,green)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>4</i>';
        document.getElementById('demo').style.color="skyblue";
        document.getElementById('demo').style.background="linear-gradient(orange,white,white)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>3</i>';
        document.getElementById('demo').style.color="grey";
        document.getElementById('demo').style.background="linear-gradient(white,white,green)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>2</i>';
        document.getElementById('demo').style.color="brown";
        document.getElementById('demo').style.background="linear-gradient(orange,white,white)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>1</i>';
        document.getElementById('demo').style.color="sandybrown";
        document.getElementById('demo').style.background="linear-gradient(white,white,green)"
                setTimeout(()=>{
        document.getElementById('demo').innerHTML='<i>HAPPY INDEPENDENCE DAY</i>';
        document.getElementById('demo').style.color='rgb(4, 4, 77)'
        document.getElementById('demo').style.background="linear-gradient(orange,white,green)"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

callbackhell();
