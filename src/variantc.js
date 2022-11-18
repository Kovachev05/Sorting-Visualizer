window.intArr = [
        32, 44, 27, 6, 13, 31, 52, 37, 1, 21, 23, 35, 10, 26, 51, 40, 15, 46, 3, 5,
        53, 7, 32, 52, 13, 49, 31, 25, 30, 18, 22, 27, 35, 51, 14, 48, 19, 11, 47, 3,
        43, 4, 32, 20, 9, 17, 55, 31, 52, 16, 6, 11, 21, 14, 18, 47, 38, 45, 5, 37,
        14, 39, 4, 6, 38, 22, 46, 49, 13, 25, 27, 31, 15, 2, 11, 36, 16, 23, 40, 19
    ];
    window.movedBar = -1;
    window.abort;
    window.start = 0;
    let id;
    
    function main()
    {
        abort = 0;
        blockBtn();
        animate();
    }

    function animate(timestamp)
    {
        const elapsed = timestamp - start;
        if (elapsed > 10) {
            start = timestamp;
            bubbleSort();
            if(abort == 1)
            {
                stopAnimation();
            }  
        }
        id = window.requestAnimationFrame(animate);
    }

    function stopAnimation()
    {
        window.cancelAnimationFrame(id);
    }
    
    function getArray()
    {
        let input = document.getElementById("numinput").value;
        const inputArr = [];
        let buffer = "";
        let x = 0;
        for(let i = 0; x < input.length; i++)
        {
            buffer = "";
            for(let j = x; j < input.length; j++)
            {
                x = j;
                if(input[j] == ',')
                {
                    break;
                }
                buffer += input[j];
            }
            inputArr.push(buffer);
            x++;
        }
        //intArr = [];
        for(let k = 0; k < inputArr.length; k++)
        {
            intArr[k] = parseInt(inputArr[k]);
        }
        printChart();
    }
    
    function printChart()
    {
        if(intArr.length < 15)
        {
            myCanvas.width = intArr.length * 100;
        }
        // X-pos and Y-pos of each bar
        let x = 0;
        let y;
        // Width and height of each bar
        let w = myCanvas.width/intArr.length;
        let h;
        // X-increment
        let space = w * 0.01;
        let inc = w + space;
        // Get canvas 
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        for(let i = 0; i < intArr.length; i++)
        {
            h = intArr[i] * 10;
            y = myCanvas.height - h;
            if(movedBar == i)
            {
                ctx.fillStyle = "green";
            }
            else
            {
                ctx.fillStyle = "white";
            }
            ctx.fillRect(x, y, w, h);
            x += inc;
        }
    }
    
    function bubbleSort()
    {
        let buffer_int1;
        let buffer_int2;
        for(let i = 0; i < intArr.length; i++)
        {
            if(intArr[i] > intArr[i+1])
            {
                buffer_int1 = intArr[i];
                buffer_int2 = intArr[i+1];
                intArr[i] = buffer_int2;
                intArr[i+1] = buffer_int1;
                movedBar = i;
                break;
            }
            if(i == intArr.length-2 || intArr.length == 1)
            {
                fin();
            }
        }
        printChart();
    }

    function fin()
    {
        blockBtn();
        abort = 1;
        console.log("fin");
    }
  
    // Disable buttons if active and vice versa
    function blockBtn()
    {
        const btnPrint = document.querySelector('#printbtn');
        const btnSort = document.querySelector('#sortbtn');
        (btnPrint.disabled == false) ? btnPrint.disabled = true : btnPrint.disabled = false;
        (btnSort.disabled == false) ? btnSort.disabled = true : btnSort.disabled = false;
        
    }
    
    /*
    ToDo: 
    PRINT BAR CHART BUTTON
    //- Create getArray function to get array of strings
    //- Create arrayToInt function to convert string of numbers into integers
    //- Create a canvas to draw rectangles on
    //- Draw bars on canvas with data from int array
    //- Fix issue with intArr.length
    //- Fix issue with input[j] ignoring repeating values
    - Fix border issue
    
    SORT BAR CHART BUTTON
    //- Create Bubble Sort function to sort array of ints in ascending order
    //- Print bar chart after each iteration
    - Fix issue with sorting not stopping with intArr having < 3 values
    //- Put some wait times between each sort iteration 
    //- Change color of switching bar to green
    - Replace Bubble Sort with Quick Sort to increase effeicency
    */
