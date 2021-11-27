/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Created by Nessa!!!
 */

'use strict';
var isValid;
window.onload = function () {
    console.log("uwu");
    const switcher = document.querySelector('.submit');

    switcher.addEventListener('click', function () {
        
        const id = document.querySelector('.owo').value;
        isValid = false;

        fetch("uwuInfo_BACKUP.csv")
                .then(function (response) {
                    return response.text();
                }).then(function (text) {
            const lines = text.split("\n");
            console.log(lines[0]);
            for (var x = 0; x < lines.length; x++) {
                //console.log(line);
                var items = lines[x].split(",");
                //console.log(items[0]);
                if (items[0] === id) {
                    isValid = true;
                    
                    const allInfo = {
                       valid: isValid, 
                       id: items[0],
                       name:items[1]
                    };
                    console.log(allInfo[0]);
                    return allInfo;
                    console.log(items);
                }
            }
        }).then(function(allInfo) {
            
            if (isValid) {
                var uwu = document.querySelector('.validityChecker');
                uwu.style.visibility = 'visible';
                uwu.innerHTML = "Verified!";
                uwu.style.backgroundColor = "#9bf09b";
                var pissBaby = document.querySelector('.name');
                pissBaby.innerHTML = allInfo.name;
                // pops up a green box on the screen with dark green saying "authenticated!"
            } else {
                var owo = document.querySelector('.validityChecker');
                owo.style.visibility = 'visible';
                owo.innerHTML = "Invalid ID!";
                owo.style.backgroundColor = "#ff595e";
                // pops up a red box saying "invalid id!"
            }
        })
                
        /*
        if (isValid) {
            const uwu = document.querySelector('#valid');
            uwu.style.visibility = 'visible';
            // pops up a green box on the screen with dark green saying "authenticated!"
        } else {
            const owo = document.querySelector('#invalid');
            owo.style.visibility = 'visible';
            // pops up a red box saying "invalid id!"
        }
         * 
         */
    }

    );
};

