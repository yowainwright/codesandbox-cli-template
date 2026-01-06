#!/usr/bin/env python3
from pathlib import Path
from datetime import datetime

target = Path("demo") / "touched.txt"
target.write_text(f"Updated at: {datetime.now().isoformat()}\n")
print("Touched demo/touched.txt")
