package main

import (
	"fmt"
	"os"
	"path/filepath"
	"time"
)

func main() {
	target := filepath.Join("demo", "touched.txt")
	content := fmt.Sprintf("Updated at: %s\n", time.Now().Format(time.RFC3339))
	os.WriteFile(target, []byte(content), 0644)
	fmt.Println("Touched demo/touched.txt")
}
