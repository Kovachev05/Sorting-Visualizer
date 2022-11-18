    // Declare global vars
    let intArr = [
    /*
        32, 44, 27, 6, 13, 31, 52, 37, 1, 21, 23, 35, 10, 26, 51, 40, 15, 46, 3, 5,
        53, 7, 32, 52, 13, 49, 31, 25, 30, 18, 22, 27, 35, 51, 14, 48, 19, 11, 47, 3,
        43, 4, 32, 20, 9, 17, 55, 31, 52, 16, 6, 11, 21, 14, 18, 47, 38, 45, 5, 37,
        14, 39, 4, 6, 38, 22, 46, 49, 13, 25, 27, 31, 15, 2, 11, 36, 16, 23, 40, 19
    */

    /* 
        13, 45, 17, 37, 6, 16, 46, 10, 4, 1,
        1, 25, 41, 49, 27, 9, 47, 15, 31, 48,
        48, 5, 10, 47, 23, 1, 9, 34, 2, 19,
        48, 2, 43, 25, 27, 45, 30, 15, 9, 3,
        30, 18, 7, 15, 50, 19, 5, 24, 35, 47,
        14, 37, 2, 34, 3, 29, 28, 30, 24, 50,
        40, 7, 37, 21, 50, 19, 30, 46, 48, 10,
        25, 43, 32, 46, 9, 37, 23, 47, 11, 31,
        8, 3, 12, 24, 5, 39, 18, 50, 25, 20,
        35, 28, 33, 8, 7, 23, 20, 22, 16, 26,
        15, 24, 50, 18, 14, 45, 1, 35, 43, 34,
        3, 38, 29, 13, 41, 42, 44, 32, 14, 2,
        4, 49, 37, 2, 41, 31, 16, 43, 24, 26,
        7, 33, 6, 8, 37, 25, 13, 31, 29, 39,
        6, 26, 17, 42, 47, 1, 39, 3, 30, 40,
        19, 11, 48, 43, 45, 30, 26, 13, 29, 28,
        41, 34, 38, 7, 48, 35, 15, 33, 24, 27,
        10, 19, 16, 24, 9, 7, 39, 30, 46, 4,
        40, 44, 33, 16, 29, 43, 17, 4, 30, 7,
        4, 47, 25, 42, 15, 2, 43, 6, 44, 23
    */

    ///*
    11, 13, 47, 42, 12, 29, 26, 33, 34, 28, 8, 44, 1, 48, 24, 36, 10, 18, 40, 22, 5, 2, 27, 50, 23, 20, 37, 25, 39, 45,
    36, 25, 48, 30, 12, 1, 33, 31, 6, 41, 14, 15, 38, 37, 20, 35, 13, 16, 39, 18, 43, 47, 49, 32, 28, 24, 11, 4, 7, 23,
    11, 39, 30, 19, 44, 12, 7, 38, 29, 48, 45, 9, 26, 16, 40, 17, 27, 3, 21, 49, 15, 5, 6, 24, 42, 8, 33, 10, 20, 31,
    50, 15, 16, 33, 29, 9, 18, 47, 22, 34, 12, 3, 46, 41, 45, 28, 32, 13, 37, 7, 19, 21, 38, 2, 27, 11, 48, 42, 8, 17,
    44, 20, 50, 45, 39, 41, 4, 30, 33, 19, 49, 38, 27, 34, 10, 13, 36, 16, 42, 40, 3, 18, 23, 31, 43, 25, 47, 6, 22, 5,
    42, 47, 4, 34, 46, 37, 23, 41, 28, 35, 50, 38, 7, 12, 20, 39, 31, 9, 27, 13, 40, 33, 19, 11, 24, 3, 18, 5, 10, 25,
    29, 28, 3, 46, 18, 50, 12, 39, 42, 49, 19, 41, 33, 30, 10, 1, 38, 2, 34, 20, 5, 32, 25, 27, 43, 4, 44, 31, 6, 45,
    2, 31, 40, 7, 43, 32, 25, 46, 35, 49, 33, 8, 17, 29, 38, 45, 5, 3, 18, 39, 41, 12, 44, 21, 16, 37, 20, 24, 9, 1,
    44, 9, 10, 17, 38, 18, 45, 22, 15, 23, 42, 14, 25, 21, 43, 32, 5, 29, 47, 11, 16, 4, 34, 3, 30, 39, 36, 7, 37, 20,
    6, 18, 11, 32, 48, 23, 2, 17, 50, 30, 38, 33, 43, 19, 26, 22, 15, 49, 42, 1, 9, 37, 46, 44, 40, 16, 13, 34, 10, 41,
    31, 33, 40, 18, 24, 50, 26, 6, 4, 16, 27, 21, 20, 35, 5, 39, 19, 32, 42, 28, 44, 46, 1, 7, 38, 37, 25, 17, 45, 11,
    19, 35, 9, 47, 42, 34, 1, 13, 45, 14, 46, 10, 33, 32, 2, 3, 26, 24, 36, 37, 48, 43, 44, 49, 7, 4, 23, 8, 28, 38,
    29, 30, 42, 48, 28, 24, 5, 36, 40, 46, 43, 2, 45, 21, 33, 41, 17, 23, 16, 15, 32, 3, 9, 14, 12, 4, 20, 26, 19, 49,
    21, 49, 31, 2, 19, 24, 20, 15, 23, 26, 5, 10, 43, 28, 36, 46, 40, 37, 17, 27, 1, 25, 14, 16, 35, 4, 3, 48, 11, 39,
    19, 36, 47, 20, 10, 38, 30, 28, 45, 46, 43, 8, 37, 9, 40, 39, 4, 17, 5, 16, 26, 11, 27, 15, 29, 21, 32, 50, 42, 1,
    32, 43, 7, 26, 27, 30, 45, 48, 42, 6, 10, 50, 40, 25, 19, 24, 11, 1, 35, 36, 15, 2, 38, 14, 3, 5, 22, 33, 18, 28,
    49, 32, 42, 4, 45, 40, 12, 6, 1, 22, 17, 46, 18, 44, 16, 35, 39, 29, 50, 47, 36, 30, 26, 2, 37, 9, 21, 7, 19, 11,
    14, 24, 18, 13, 46, 38, 30, 10, 3, 25, 7, 5, 2, 1, 36, 4, 21, 20, 35, 12, 17, 28, 33, 31, 22, 37, 42, 19, 16, 15,
    26, 24, 1, 17, 9, 29, 8, 37, 6, 49, 40, 30, 36, 47, 14, 39, 28, 32, 4, 38, 31, 10, 27, 11, 3, 43, 41, 46, 44, 35,
    20, 23, 21, 11, 4, 42, 17, 43, 32, 50, 38, 29, 8, 46, 27, 9, 34, 36, 48, 39, 41, 40, 26, 25, 1, 33, 16, 49, 47, 24
    //*/
    ];
    let movedBar; 
    let abort; 
    let mark;
    let buffer;
    
    // Sort button event function
    function main()
    {
        movedBar = -1;
        abort = false;

        blockBtn();
        const id = setInterval(() => {
            bubbleSort();

            if(abort == true)
            {
                clearInterval(id);
            }
        }, 0);
    }
    
    // Print button event function
    function getArray()
    {
        mark = false;
        // Take string input
        let input = document.getElementById("numinput").value;
        const inputArr = [];
        let buffer = "";
        let x = 0;
        // Divide string into array
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
        // Convert array into int array
        for(let k = 0; k < inputArr.length; k++)
        {
            //intArr[k] = parseInt(inputArr[k]);
        }
        console.log(intArr.length);
        printChart();
    }
    
    // Display current int array in bar chart form
    function printChart()
    {
        // Get canvas 
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

        // Get canvas width and height
        myCanvas.height = Math.max(...intArr) * 10;
        if(intArr.length < 15)
        {
            myCanvas.width = intArr.length * 100;
        }

        // X-pos and Y-pos of each bar
        let x = 0;
        let y;
        // Width and height of each bar
        let w =(myCanvas.width/intArr.length) - (myCanvas.width/intArr.length)*0.01;
        let h;
        // X-increment
        let space = w * 0.01;
        let inc = w + space;

        for(let i = 0; i < intArr.length; i++)
        {
            h = intArr[i] * 10;
            y = myCanvas.height - h;
            if(mark == false)
            {
                if(movedBar == i)
                {
                    ctx.fillStyle = "green";
                }
                else
                {
                    ctx.fillStyle = "white";
                }
            }
            // If highlight mode is on, highlight all bars up to buffer number bar in green
            else
            {
               if(i <= buffer)
               {
                    ctx.fillStyle = "green";
               } 
               else
               {
                    ctx.fillStyle = "white";
               }
            }
            ctx.fillRect(x, y, w, h);
            x += inc;
        }
    }

    function fin()
    {
        blockBtn();
        abort = true;
        movedBar = -1;
        highlight();
        console.log("fin");
    }

    // Gradually highlights all bars green - starting from lowest, to highest
    function highlight()
    {
        mark = true;
        buffer = 0;
        const id = setInterval(() => {
            printChart();
            buffer++;
            if(buffer == intArr.length)
            {
                clearInterval(id);
            }
        }, 0);
    }
  
    // Disable buttons if active and vice versa
    function blockBtn()
    {
        const btnPrint = document.querySelector('#printbtn');
        const btnSort = document.querySelector('#sortbtn');
        (btnPrint.disabled == false) ? btnPrint.disabled = true : btnPrint.disabled = false;
        (btnSort.disabled == false) ? btnSort.disabled = true : btnSort.disabled = false;
        
    }

    // Sorting algorithms
    function bubbleSort()
    {
        let buffer_int1;
        let buffer_int2;
        if(intArr.length == 1 || intArr.length == 0)
        {
            fin(); 
        }
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
            // Stop sorting and printing when array is fully sorted
            if(i == intArr.length-2)
            {
                fin();
            }
        }
        printChart();
    }
/*
    let l; // Left
    let r; // Right
    let m; // Middle
    function mergeSort()
    {
        l = 0;
        r = intArr.length - l;
        (intArr.length % 2 == 0) ? m = intArr.length/2 : m = (intArr.length + 1)/2;
        merge(l,r,m);
    }

    function merge(l,r,m)
    {      
        n1 = m - l + 1
        n2 = r - m

        var L = new Array(n1);
        var R = new Array(n2);

        for(let i = l; i < m + 1; i++)
        {
            L[i] = intArr[i];
        }
        for(let j = m; j < r; j++)
        {
            R[j] = intArr[j];
        }

        let i = 0;
        let j = 0;
        let k = 0;
        for(L[i] <= R[j])
        {
        
        }
    }   
 */
    /*
    ToDo: 
    PRINT BAR CHART BUTTON
    //- Create getArray function to get array of strings
    //- Create arrayToInt function to convert string of numbers into integers
    //- Create a canvas to draw rectangles on
    //- Draw bars on canvas with data from int array
    //- Fix issue with intArr.length
    //- Fix issue with input[j] ignoring repeating values
    //- Fix border issue
    //- Highlight all bars in green when completed
    - Assign a sound with each bar, the pitch being determined by the height
    
    SORT BAR CHART BUTTON
    //- Create Bubble Sort function to sort array of ints in ascending order
    //- Print bar chart after each iteration
    //- Fix issue with sorting not stopping with intArr having < 3 values
    //- Put some wait times between each sort iteration 
    //- Change color of switching bar to green
    - Replace Bubble Sort with Quick Sort to increase efficiency
    */