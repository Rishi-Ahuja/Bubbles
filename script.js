var a=document.getElementById('rishi')
      var b=a.getContext('2d')
      var x=200;
      var y=200;
      function draw(){
        b.fillStyle='red';
        b.fillRect(0,0,400,500);
        b.fillStyle='blue';
        b.beginPath();
        b.arc(190+Math.random()*20,y,10,0,2*Math.PI);
        b.fill();
        b.stroke();
        y=y-10;
        if (y<0)
        {
          y=500;
        }
        }
        setInterval(draw,300);
