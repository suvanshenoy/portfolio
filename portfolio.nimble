# Package
 
version       = "0.1.0"
author        = "suvanshenoy"
description   = "A developer porfolio"
license       = "MIT"

# Dependencies

requires "nim >= 2.2.4"
requires "karax >= 1.5.0"

# Tasks

task gen, "Generate javascript portfolio":
  exec "nimble js portfolio.nim"

