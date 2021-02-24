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
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';
import Marker from "../static/img/marker.png";

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';

var SoundBlockField =   {
  "type": "play_sound",
  "message0": "Play %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "VALUE",
      "options": [
        ["C4", "sounds/c4.m4a"],
        ["D4", "sounds/d4.m4a"],
        ["E4", "sounds/e4.m4a"],
        ["F4", "sounds/f4.m4a"],
        ["G4", "sounds/g4.m4a"],
        ["A5", "sounds/a5.m4a"],
        ["B5", "sounds/b5.m4a"],
        ["C5", "sounds/c5.m4a"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 355,
}

Blockly.Blocks['play_sound'] = {
  init: function() {
    this.jsonInit(SoundBlockField);
    this.setStyle('loop_blocks');
  }
};


var MoveForward = {
  "type": "Maze_moveForward",
  "message0": 'Move Forward',
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": 'Maze_moveForwardTooltip'
}

Blockly.Blocks['Maze_moveForward'] = {
  init: function() {
    this.jsonInit(MoveForward);
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['maze_turn'] = {
  /**
   * Block for turning left or right.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [['Turn left', 'left'],
          ['Turn right', 'right']];
    // Append arrows to direction messages.
    DIRECTIONS[0][0] += ' \u21BA';
    DIRECTIONS[1][0] += ' \u21BB';
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Maze_turnTooltip');
  }
};

Blockly.Blocks['maze_if'] = {
  /**
   * Block for 'if' conditional if there is a path.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [['is path forward', 'isPathForward'],
          ['is path left', 'isPathLeft'],
          ['is path right', 'isPathRight']];
    // Append arrows to direction messages.
    DIRECTIONS[1][0] += ' \u21BB';
    DIRECTIONS[2][0] += ' \u21BA';
    this.setColour(210);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.appendStatementInput('DO')
        .appendField('Do');
    this.setTooltip('Maze_ifTooltip');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['maze_ifElse'] = {
  /**
   * Block for 'if/else' conditional if there is a path.
   * @this {Blockly.Block}
   */
  init: function() {
    var DIRECTIONS =
        [['is path forward', 'isPathForward'],
          ['is path left', 'isPathLeft'],
          ['is path right', 'isPathRight']];
    // Append arrows to direction messages.
    DIRECTIONS[1][0] += ' \u21BA';
    DIRECTIONS[2][0] += ' \u21BB';
    this.setColour(210);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.appendStatementInput('DO')
        .appendField('Do');
    this.appendStatementInput('ELSE')
        .appendField('Else');
    this.setTooltip('Maze_ifElseTooltip');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['maze_forever'] = {
  /**
   * Block for repeat loop.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField('repeat until')
        .appendField(new Blockly.FieldImage(Marker, 12, 16));
    this.appendStatementInput('DO')
        .appendField('Do');
    this.setPreviousStatement(true);
    this.setTooltip('Maze_whileTooltip');
  }
};

Blockly.Blocks['maze_forever'] = {
  /**
   * Block for repeat loop.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField('repeat until')
        .appendField(new Blockly.FieldImage(Marker, 12, 16));
    this.appendStatementInput('DO')
        .appendField('Do');
    this.setPreviousStatement(true);
    this.setTooltip('Maze_whileTooltip');
  }
};


