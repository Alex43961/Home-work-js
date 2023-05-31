package main

import"fmt"


func main() {

var a = add(4, 5)

fmt.Println(a)

}

func add (x , y int) int {
	return x + y
}