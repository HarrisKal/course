// A Matrix is a 2d array. It can be represented as an array of arrays,
// where each subarray is a row and each element within the subarrays
// is a cell in that particular row.

class Matrix {
    constructor(rows, cols) {
        // Cret the mrix as a ray of rows
        // Each row is self a ray of cols
        this.matrix = Array.from(
            { length: rows }, () => Array.from({ length: cols })
        );
    }

    get rows() { return this.matrix.length }
    set rows(r) { this.matrix.length = r }
    get cols() { return this.matrix[0].length }
    set cols(c) { for (let r in this.matrix) this.matrix[r].length = c }

    print() {
        console.log("Matrix:");
        for (let i = 0; i < this.rows; i++) {
            console.log(this.matrix[i]);
        }
    }

    addRow(row) {
        this.matrix.push(row);
    }

    addCol(col) {
        for (let i = 0; i < this.rows; i++)
            this.matrix[i].push(col);
    }

    transpose() {
        let t = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                t.matrix[j][i] = this.matrix[i][j];
        return t;
    }
}

// Testing out the matrix class
function testMatrix() {
    let m1 = new Matrix(3, 4);
    m1.print();
    console.log("\nAdding a row to m1:\n");
    m1.addRow([5, 6, 7, 8]);
    m1.print();
    console.log("\nTransposing m1:\n");
    let m2 = m1.transpose();
    m2.print();

    // Adding columns
    console.log("\nAdding a column to both matrices:\n");
    m1.addCol(9);
    m1.print();
    m2.addCol(9);
    m2.print();
}