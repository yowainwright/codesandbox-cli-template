package main

import (
	"fmt"
	"os"
	"path/filepath"
	"time"
)

func main() {
	exe, _ := os.Executable()
	target := filepath.Join(filepath.Dir(exe), "..", "packages", "demo", "touched.txt")

	if _, err := os.Stat(target); os.IsNotExist(err) {
		target = filepath.Join("packages", "demo", "touched.txt")
	}

	content := fmt.Sprintf("Updated at: %s\n", time.Now().Format(time.RFC3339))
	os.WriteFile(target, []byte(content), 0644)
	fmt.Println("Touched packages/demo/touched.txt")
}
