
; Initialization
push1 0x60 (#0x0)
push1 0x40 (#0x2)
mstore (#0x4)
callvalue (#0x5)
iszero (#0x6)
push2 0x000c (#0x7)
jumpi label1 (#0xa)
throw (#0xb)

:label1
jumpdest (#0xc)

:label2
jumpdest (#0xd)
push1 0x2a (#0xe)
push1 0x00 (#0x10)
dup2 (#0x12)
swap1 (#0x13)
sstore (#0x14)
pop (#0x15)

:label3
jumpdest (#0x16)

:label4
jumpdest (#0x17)
push1 0xa8 (#0x18)
dup1 (#0x1a)
push2 0x0025 (#0x1b)
push1 0x00 (#0x1e)
codecopy (#0x20)
push1 0x00 (#0x21)
return (#0x23)
stop (#0x24)

; Contract
push1 0x60 (#0x0)
push1 0x40 (#0x2)
mstore (#0x4)
push1 0x00 (#0x5)
calldatavalue (#0x7)
push29 0x0100000000000000000000000000000000000000000000000000000000 (#0x8)
swap1 (#0x26)
div (#0x27)
push4 0xffffffff (#0x28)
and (#0x2d)
dup1 (#0x2e)
push4 0xca77ab65 (#0x2f)
eq (#0x34)
push1 0x3a (#0x35)
jumpi label6 (#0x37)

:label5
jumpdest (#0x38)
throw (#0x39)

:label6
jumpdest (#0x3a)
callvalue (#0x3b)
iszero (#0x3c)
push1 0x41 (#0x3d)
jumpi label7 (#0x3f)
throw (#0x40)

:label7
jumpdest (#0x41)
push1 0x47 (#0x42)
push1 0x5d (#0x44)
jump label9 (#0x46)

:label8
jumpdest (#0x47)
push1 0x40 (#0x48)
mload (#0x4a)
dup1 (#0x4b)
dup3 (#0x4c)
dup2 (#0x4d)
mstore (#0x4e)
push1 0x20 (#0x4f)
add (#0x51)
swap2 (#0x52)
pop (#0x53)
pop (#0x54)
push1 0x40 (#0x55)
mload (#0x57)
dup1 (#0x58)
swap2 (#0x59)
sub (#0x5a)
swap1 (#0x5b)
return (#0x5c)

:label9
jumpdest (#0x5d)
push1 0x00 (#0x5e)
push1 0x68 (#0x60)
push1 0x00 (#0x62)
sload (#0x64)
push1 0x6e (#0x65)
jump label12 (#0x67)

:label10
jumpdest (#0x68)
swap1 (#0x69)
pop (#0x6a)

:label11
jumpdest (#0x6b)
swap1 (#0x6c)
jump (#0x6d)

:label12
jumpdest (#0x6e)
push1 0x00 (#0x6f)
push1 0x01 (#0x71)
dup3 (#0x73)
add (#0x74)
swap1 (#0x75)
pop (#0x76)

:label13
jumpdest (#0x77)
swap2 (#0x78)
swap1 (#0x79)
pop (#0x7a)
jump (#0x7b)
stop (#0x7c)

