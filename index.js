
          const canvas = document.getElementById('canvas');
      let c = canvas.getContext('2d');
      canvas.style.backgroundColor = "black"
      canvas.height = window.innerHeight
      canvas.width = window.innerWidth

      const g = 1

      function Circle(x,y,vx,vy,r){
          this.x = x
          this.y = y
          this.vx = vx
          this.vy = vy
          this.r = r

          this.draw = function ddraw(){
              c.beginPath()
              c.arc(this.x,this.y,this.r, 0, Math.PI * 2, false)
              c.strokeStyle ='blue', 'none', 'solid';
              c.stroke();
          }
          this.update = function(){
              if (this.x + this.r > innerWidth || this.x - this.r <= 0){
                  this.vx =  this.vx * -1 
              }
              if (this.y + this.r > innerHeight){
                  this.vy =  Math.ceil( (this.vy - 0.2)*-1 )
                  if (this.y + this.r - (this.r/100 * 3.5) > innerHeight){ this.vy = 0; this.y + this.r == innerHeight}
              } else {this.vy += g}

             // this.vy += g
              console.log(this.vy);
              //if (this.vy <= 2 && this.y + this.r == innerHeight - 2){this.vy = 0}
              this.x += this.vx
              this.y += this.vy

              this.draw();
          }

      }

      let cirArr = []

      cirArr.push(new Circle(800,100,0,0,30));


      console.log(cirArr);

      function animate(){
          requestAnimationFrame(animate);
          c.clearRect(0,0,innerWidth, innerHeight);

          for (i = 0; i < cirArr.length; i++){
              cirArr[i].update();
          }
      }
      animate();
    
