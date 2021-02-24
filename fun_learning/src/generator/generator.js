/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['Maze_moveForward'] = function(block) {
    // Generate JavaScript for moving forward.
    return 'moveForward();';
};
Blockly.JavaScript['maze_turn'] = function(block) {
    // Generate JavaScript for turning left or right.
    var dir = block.getFieldValue('DIR');
    return 'turn' + '("'+ dir + '");\n';
};
Blockly.JavaScript['maze_if'] = function(block) {
    // Generate JavaScript for 'if' conditional if there is a path.
    var argument = block.getFieldValue('DIR') +
        '(\'block_id_' + block.id + '\')';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    return  'if (' + argument + ') {\n' + branch + '}\n';
};

Blockly.JavaScript['maze_ifElse'] = function(block) {
    // Generate JavaScript for 'if/else' conditional if there is a path.
    var argument = block.getFieldValue('DIR') +
        '(\'block_id_' + block.id + '\')';
    var branch0 = Blockly.JavaScript.statementToCode(block, 'DO');
    var branch1 = Blockly.JavaScript.statementToCode(block, 'ELSE');
    return 'if (' + argument + ') {\n' + branch0 +
        '} else {\n' + branch1 + '}\n';
};

Blockly.JavaScript['maze_forever'] = function(block) {
    // Generate JavaScript for repeat loop.
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
        branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'block_id_' + block.id + '\'') + branch;
    }
    return 'while (notDone()) {\n' + branch + '}\n';
};

Blockly.JavaScript['play_sound'] = function(block) {
    let value = '\'' + block.getFieldValue('VALUE') + '\'';
    return 'MusicMaker.queueSound(' + value + ');\n';
};
