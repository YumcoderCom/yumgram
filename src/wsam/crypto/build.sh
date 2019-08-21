#!/bin/sh
# 
#  Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
#  
#  This source code is licensed under the license found in the LICENSE file in
#  the root directory of this source tree.
# 

folder='./build'
cmake -B $folder
make -C $folder 
cp $folder/bin/crypto.wasm ../../../public/assets/wasm