import {React, useEffect, useRef, useState} from 'react';
import p5 from 'p5';


export default function Riverp5(){
    const p5Ref = useRef(null);
    let myP5;

    const sketch = (p) => {
        let x
        let y
        let leftx
        let rightx
        let defaultSize
        let maxSize
        let changingSize
        let defaultSpeed
        let maxSpeed
        let speed
        let faceSpeed
        let centerx
        let ht
        let diff
        let smileChange
        let songLength
        let maxLines
        let lines = []
        let gif


        p.setup = () => {
            p.createCanvas(400, 400);
            defaultSize = 30
            maxSize = 200
            defaultSpeed = 1
            maxSpeed = 5
            changingSize = 50
            speed = p.random(defaultSpeed, maxSpeed)
            leftx = (p.width/2) - defaultSize
            rightx = (p.width/2) + defaultSize
            x = p.random(leftx + 2, rightx - 2)
            y = p.height + defaultSize
            // Create initial lines
            maxLines = 15
            for (let i = 0; i < maxLines; i++) {
                x = p.random(leftx + 2, rightx - 2)
                y = p.height + defaultSize
                changingSize = p.random(defaultSize, maxSize)
                lines.push({
                x1: x,   
                y1: y,          
                x2: x,   
                y2: y+changingSize,          
                speed: p.random(defaultSpeed, maxSpeed)
                });
            }
            songLength = 148
            faceSpeed = songLength/p.height *0.3
            smileChange = 0
            centerx = leftx + ((rightx - leftx)/2)
            ht = p.height - p.height/6
            diff = (rightx - leftx)/4
            
        }

        p.draw = () => {
            p.background(220);
            //borders
            p.line(leftx, 0, leftx, p.height)
            p.line(rightx, 0, rightx, p.height)
            //lines
            for (let i = 0; i < lines.length; i++) {
                let lineObj = lines[i];
                
                // Move the line upwards
                lineObj.y1 -= lineObj.speed;
                lineObj.y2 -= lineObj.speed;
                
                // Draw the line with updated coordinates
                p.line(lineObj.x1, lineObj.y1, lineObj.x2, lineObj.y2);
                
                // Reset the line's position if it goes off the top of the canvas
                if (lineObj.y2 < 0) {
                    let tempy = p.random(p.height + defaultSize, p.height + defaultSize+30)
                    lineObj.changingSize = p.random(defaultSize, maxSize)
                    lineObj.speed = p.random(defaultSpeed, maxSpeed)
                    lineObj.y1 = tempy; 
                    lineObj.y2 = tempy + lineObj.changingSize; 
                }
            }
            //head
            p.noStroke()
            p.fill(p.color(220, 220, 220, 230))
            p.ellipse(centerx, ht+diff*0.7,rightx-leftx-2 ,rightx-leftx+15)
            p.stroke(100)
            //face
            //left eye
            p.ellipse(centerx-diff, ht - 10, 1,1)
            //left undereye
            p.line(leftx + 5, ht, centerx - 5, ht)
            //right eye
            p.ellipse(centerx+diff, ht - 10, 1,1)
            //right undereye
            p.line(centerx + 5, ht, rightx - 5, ht)
            //nose
            let nosex = centerx + diff * 0.25 
            let nosey = ht + diff*0.7
            p.line(nosex , nosey, nosex + diff * 0.3, nosey + diff)
            p.line(nosex + diff * 0.3, nosey + diff, nosex, nosey + diff)
            //mouth
            //line(centerx - diff*0.4, ht + diff*2.8, centerx + diff * 0.8, ht + diff* 2.8)
            ht = ht - faceSpeed
            if (ht < (0 - diff * 3)){
                ht = p.height + diff 
            }
            p.curve(centerx - diff*0.4, ht + diff*2.8-smileChange, centerx - diff*0.4, ht + diff*2.8, centerx + diff * 0.8, ht + diff* 2.8, centerx + diff * 0.8, ht + diff*2.8-smileChange);
            
        }

        p.mousePressed = () => {
        if(p.mouseX > leftx && p.mouseX < rightx && p.mouseY < ht + diff*3 && p.mouseY > ht - diff){
        smileChange = 20
        }
        else{
            decreaseSmile()
        }
        }

        p.mouseDragged = () => {
        if(p.mouseX > leftx && p.mouseX < rightx && p.mouseY < ht + diff*3 && p.mouseY > ht - diff){
        increaseSmile()
        }
        else{
            decreaseSmile()
        }
        }

        p.mouseReleased = () => {
        smileChange = 0
        }

        function increaseSmile(){
        if (smileChange >= 20){
            smileChange = 20
        }
        else{
            smileChange += 3
        }
        }

        function decreaseSmile(){
        if (smileChange <= 0){
            smileChange = 0
        }
        else{
            smileChange -= 3
        }
        }
    }

    useEffect(() => {
        p5Ref.current = new p5(sketch, 'p5-container')
        return () => {p5Ref.current.remove();}
    }, [])
    
    return <div id="p5-container"></div>
}

/*


*/