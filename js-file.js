    // Create grid squares using JavaScript    
    function createTable(dimension) {
        let container = document.querySelector('#container');

        for (rows = 0; rows < dimension; rows++) {
            let divRows = document.createElement('div');
            divRows.className = 'columns';
            for (column = 0; column < dimension; column++) {
                let divColumns = document.createElement('div');
                divColumns.className = 'squares'
                divRows.append(divColumns);
            }
            container.append(divRows);
        }

        let squares = document.querySelectorAll('.squares');
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('mouseover', function (e) {
                squares[i].className = 'used';
            })
        }
    }

    function deleteTable() {
        let container = document.querySelector('#container');
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }

    document.querySelector('button').addEventListener('click', function (e) {
        deleteTable();
        createTable(parseInt(prompt("Dimensions?")));
    })

    createTable(16);