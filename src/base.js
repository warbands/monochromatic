/**
 * Defines the base color scheme.
 *
 * @return {*} Copy of the base color scheme.
 */
const base = () => {
  return {
    colors: {
      'activityBar.activeBorder': 0,
      'activityBar.background': 0,
      'activityBar.border': 0.0392156862745098,
      'activityBar.foreground': 0.7490196078431373,
      'activityBar.inactiveForeground': 0.23921568627450981,
      'activityBarBadge.background': 0.3764705882352941,
      'badge.background': 0.10196078431372549,
      'badge.foreground': 0.7490196078431373,
      'button.background': 0.09411764705882353,
      'button.hoverBackground': 0.12156862745098039,
      'checkbox.border': 0.0392156862745098,
      'dart.closingLabels': 0.0784313725490196,
      'debugIcon.breakpointCurrentStackframeForeground': 0.5686274509803921,
      'debugIcon.breakpointDisabledForeground': 0.5686274509803921,
      'debugIcon.breakpointForeground': 0.5686274509803921,
      'debugIcon.breakpointStackframeForeground': 0.5686274509803921,
      'debugIcon.breakpointUnverifiedForeground': 0.5686274509803921,
      'debugIcon.continueForeground': 0.5686274509803921,
      'debugIcon.disconnectForeground': 0.5686274509803921,
      'debugIcon.pauseForeground': 0.5686274509803921,
      'debugIcon.restartForeground': 0.5686274509803921,
      'debugIcon.startForeground': 0.5686274509803921,
      'debugIcon.stepBackForeground': 0.5686274509803921,
      'debugIcon.stepIntoForeground': 0.5686274509803921,
      'debugIcon.stepOutForeground': 0.5686274509803921,
      'debugIcon.stepOverForeground': 0.5686274509803921,
      'debugIcon.stopForeground': 0.5686274509803921,
      'debugToolBar.background': 0,
      'dropdown.background': 0,
      'dropdown.foreground': 0.5686274509803921,
      'editor.background': 0,
      'editor.findMatchBackground': 0,
      'editor.findMatchBorder': 0.5019607843137255,
      'editor.findMatchHighlightBackground': 0,
      'editor.findMatchHighlightBorder': 0.23921568627450981,
      'editor.foldBackground': 0,
      'editor.foreground': 0.7019607843137254,
      'editor.hoverHighlightBackground': 0.058823529411764705,
      'editor.lineHighlightBackground': 0.025,
      'editor.selectionBackground': 0.058823529411764705,
      'editorBracketMatch.background': 0,
      'editorBracketMatch.border': 0.23921568627450981,
      'editorCursor.foreground': 0.7019607843137254,
      'editorError.foreground': 0.3607843137254902,
      'editorGroup.border': 0.0392156862745098,
      'editorGroupHeader.tabsBackground': 0,
      'editorGroupHeader.tabsBorder': 0.0392156862745098,
      'editorIndentGuide.activeBackground': 0.24,
      'editorIndentGuide.background': 0.08,
      'editorInfo.foreground': 0.3607843137254902,
      'editorLightBulb.foreground': 0.5686274509803921,
      'editorLineNumber.activeForeground': 0.25882352941176473,
      'editorLineNumber.foreground': 0.10196078431372549,
      'editorLink.activeForeground': 0.7490196078431373,
      'editorOverviewRuler.border': 0.0392156862745098,
      'editorRuler.foreground': 0.08,
      'editorSuggestWidget.foreground': 0.3764705882352941,
      'editorSuggestWidget.highlightForeground': 0.7490196078431373,
      'editorWarning.foreground': 0.3607843137254902,
      'editorWhitespace.foreground': 0.10196078431372549,
      'editorWidget.background': 0,
      'editorHoverWidget.statusBarBackground': 0,
      'focusBorder': 0,
      'gitDecoration.ignoredResourceForeground': 0.154,
      'gitDecoration.addedResourceForeground': 0.752,
      'gitDecoration.modifiedResourceForeground': 0.752,
      'gitDecoration.deletedResourceForeground': 0.3764705882352941,
      'gitDecoration.untrackedResourceForeground': 0.752,
      'gitDecoration.conflictingResourceForeground': 0.752,
      'gitDecoration.submoduleResourceForeground': 0.3764705882352941,
      'icon.foreground': 0.2196078431372549,
      'input.background': 0,
      'input.border': 0,
      'input.foreground': 0.5686274509803921,
      'list.activeSelectionBackground': 0.0392156862745098,
      'list.activeSelectionForeground': 0.7490196078431373,
      'list.filterMatchBackground': 0.10196078431372549,
      'list.filterMatchBorder': 0,
      'list.focusBackground': 0.0392156862745098,
      'list.highlightForeground': 0.6,
      'list.hoverBackground': 0,
      'list.inactiveSelectionBackground': 0,
      'list.inactiveSelectionForeground': 0.7490196078431373,
      'listFilterWidget.background': 0,
      'listFilterWidget.outline': 0.23921568627450981,
      'menu.background': 0,
      'menu.foreground': 0.5686274509803921,
      'menubar.selectionBackground': 0.0392156862745098,
      'panel.border': 0.0392156862745098,
      'panelTitle.activeBorder': 0,
      'panelTitle.activeForeground': 0.7490196078431373,
      'panelTitle.inactiveForeground': 0.23921568627450981,
      'peekView.border': 0.2196078431372549,
      'peekViewEditor.background': 0,
      'peekViewEditor.matchHighlightBackground': 0,
      'peekViewEditor.matchHighlightBorder': 0.23921568627450981,
      'peekViewEditorGutter.background': 0,
      'peekViewResult.background': 0.023529411764705882,
      'peekViewResult.fileForeground': 0.6,
      'peekViewResult.lineForeground': 0.23921568627450981,
      'peekViewResult.matchHighlightBackground': 0.058823529411764705,
      'peekViewResult.selectionBackground': 0,
      'peekViewResult.selectionForeground': 0.7490196078431373,
      'pickerGroup.foreground': 0.615686274509804,
      'sash.hoverBorder': 0.058823529411764705,
      'scrollbar.shadow': 0,
      'scrollbarSlider.activeBackground': 0.058823529411764705,
      'scrollbarSlider.background': 0.058823529411764705,
      'scrollbarSlider.hoverBackground': 0.058823529411764705,
      'settings.checkboxBorder': 0.0392156862745098,
      'settings.dropdownBorder': 0.0392156862745098,
      'settings.modifiedItemIndicator': 0.2196078431372549,
      'settings.textInputBorder': 0.0392156862745098,
      'sideBar.background': 0,
      'sideBar.border': 0.0392156862745098,
      'sideBar.foreground': 0.3764705882352941,
      'sideBarSectionHeader.background': 0,
      'sideBarSectionHeader.border': 0.0392156862745098,
      'statusBar.background': 0,
      'statusBar.border': 0.0392156862745098,
      'statusBar.debuggingBackground': 0,
      'statusBar.debuggingBorder': 0.0392156862745098,
      'statusBar.debuggingForeground': 0.5686274509803921,
      'statusBar.foreground': 0.5686274509803921,
      'statusBar.noFolderBackground': 0,
      'statusBar.noFolderBorder': 0.0392156862745098,
      'statusBar.noFolderForeground': 0.5686274509803921,
      'statusBarItem.activeBackground': 0,
      'statusBarItem.hoverBackground': 0,
      'symbolIcon.arrayForeground': 0.5686274509803921,
      'symbolIcon.booleanForeground': 0.5686274509803921,
      'symbolIcon.classForeground': 0.5686274509803921,
      'symbolIcon.colorForeground': 0.5686274509803921,
      'symbolIcon.constantForeground': 0.5686274509803921,
      'symbolIcon.constructorForeground': 0.5686274509803921,
      'symbolIcon.enumeratorForeground': 0.5686274509803921,
      'symbolIcon.enumeratorMemberForeground': 0.5686274509803921,
      'symbolIcon.eventForeground': 0.5686274509803921,
      'symbolIcon.fieldForeground': 0.5686274509803921,
      'symbolIcon.fileForeground': 0.5686274509803921,
      'symbolIcon.folderForeground': 0.5686274509803921,
      'symbolIcon.functionForeground': 0.5686274509803921,
      'symbolIcon.interfaceForeground': 0.5686274509803921,
      'symbolIcon.keyForeground': 0.5686274509803921,
      'symbolIcon.keywordForeground': 0.5686274509803921,
      'symbolIcon.methodForeground': 0.5686274509803921,
      'symbolIcon.moduleForeground': 0.5686274509803921,
      'symbolIcon.namespaceForeground': 0.5686274509803921,
      'symbolIcon.nullForeground': 0.5686274509803921,
      'symbolIcon.numberForeground': 0.5686274509803921,
      'symbolIcon.objectForeground': 0.5686274509803921,
      'symbolIcon.operatorForeground': 0.5686274509803921,
      'symbolIcon.packageForeground': 0.5686274509803921,
      'symbolIcon.propertyForeground': 0.5686274509803921,
      'symbolIcon.referenceForeground': 0.5686274509803921,
      'symbolIcon.snippetForeground': 0.5686274509803921,
      'symbolIcon.stringForeground': 0.5686274509803921,
      'symbolIcon.structForeground': 0.5686274509803921,
      'symbolIcon.textForeground': 0.5686274509803921,
      'symbolIcon.typeParameterForeground': 0.5686274509803921,
      'symbolIcon.unitForeground': 0.5686274509803921,
      'symbolIcon.variableForeground': 0.5686274509803921,
      'tab.activeForeground': 0.7490196078431373,
      'tab.border': 0,
      'tab.inactiveBackground': 0,
      'tab.inactiveForeground': 0.23921568627450981,
      'terminal.ansiBrightBlack': 0.1,
      'terminal.ansiBrightBlue': 0.2,
      'terminal.ansiBrightGreen': 0.3,
      'terminal.ansiBrightCyan': 0.4,
      'terminal.ansiBrightRed': 0.5,
      'terminal.ansiBrightMagenta': 0.6,
      'terminal.ansiBrightYellow': 0.7,
      'terminal.ansiBrightWhite': 1,
      'terminal.ansiBlack': 0,
      'terminal.ansiBlue': 0.2,
      'terminal.ansiGreen': 0.3,
      'terminal.ansiCyan': 0.4,
      'terminal.ansiRed': 0.5,
      'terminal.ansiMagenta': 0.6,
      'terminal.ansiYellow': 0.7,
      'terminal.ansiWhite': 0.8,
      'terminal.background': 0,
      'terminal.foreground': 0.6,
      'terminalCursor.background': 0,
      'terminalCursor.foreground': 0.7019607843137254,
      'textLink.activeForeground': 1,
      'textLink.foreground': 1,
      'textPreformat.foreground': 0.5686274509803921,
      'titleBar.activeBackground': 0,
      'titleBar.activeForeground': 0.5686274509803921,
      'titleBar.border': 0.0392156862745098,
      'titleBar.inactiveBackground': 0,
      'tree.indentGuidesStroke': 0.0784313725490196,
      'window.activeBorder': 0.0392156862745098,
    },
    tokenColors: [

      // COMMENT
      {
        scope: 'comment',
        settings: {
          foreground: '#a079fc',
        },
      },


      // CONSTANT
      {
        scope: 'constant',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'constant.numeric',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'constant.other.color',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'constant.other.symbol',
        settings: {
          foreground: '#FF0000',
        },
      },
      

      // ENTITY
      {
        scope: 'entity.name.class, entity.name.type.class',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'entity.name.function,',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'entity.name.section',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'entity.other.attribute-name.class',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'entity.other.attribute-name.pseudo-element',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'entity.other.inherited-class',
        settings: {
          foreground: '#FF0000',
        },
      },


      // INVALID
      {
        scope: 'invalid.illegal',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          foreground: '#FF0000',
        },
      },


      // KEYWORD
      {
        scope: 'keyword',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.operator.assignment',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.other.unit',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.other.unit.px',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.other.important',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.operator.gradient',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'keyword.other.special-method',
        settings: {
          foreground: '#a079fc',
        },
      },


      // MARKUP
      {
        scope: 'markup.bold',
        settings: {
          foreground: '#a079fc',
          fontStyle: 'bold',
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'markup.heading',
        settings: {
          foreground: '#a079fc',
          fontStyle: '',
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          foreground: '#a079fc',
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.list',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'markup.raw.inline',
        settings: {
          foreground: '#a079fc',
        },
      },


      // META
      {
        scope: 'meta.class',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'meta.link',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'meta.property-value',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'meta.require',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'meta.selector',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          foreground: '#FF0000',
        },
      },
      

      // NONE
      {
        scope: 'none',
        settings: {
          foreground: 0.7019607843137254,
        },
      },


      // PUNCTUATION
      {
        scope: 'punctuation.definition.array',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.definition.array.begin, punctuation.definition.array.end',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.definition.bold',
        settings: {
          foreground: '#FF0000',
          fontStyle: 'bold',
        },
      },
      {
        scope: 'punctuation.definition.dictionary.begin, punctuation.definition.dictionary.end',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.definition.comment',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.definition.heading',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.definition.italic',
        settings: {
          foreground: '#FF0000',
          fontStyle: 'italic',
        },
      },
      {
        scope: 'punctuation.definition.parameters',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.definition.string',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.definition.string.begin, punctuation.definition.string.end',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.definition.string.end.markdown',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'punctuation.definition.variable',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'punctuation.section.function.begin.bracket.round, punctuation.section.function.end.bracket.round',
        settings: {
          foreground: '#FF0000',
        }
      },

      {
        scope: 'punctuation.section.property-list.begin.bracket.curly, punctuation.section.property-list.end.bracket.curly',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.separator.dictionary.pair',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'punctuation.separator.array',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.separator.key-value',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.definition.entity',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.separator.dictionary.key-value',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.section.embedded',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'punctuation.terminator.rule',
        settings: {
          foreground: '#FF0000',
        }
      },
        
      
      // STORAGE
      {
        scope: 'storage',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'storage.type.function',
        settings: {
          foreground: '#FF0000',
        },
      },


      // STRING
      {
        scope: 'string',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'string.quoted.double',
        settings: {
          foreground: '#a079fc',
        }
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'string.other.link',
        settings: {
          foreground: '#a079fc',
        }
      },
      

      // SUPPORT
      {
        scope: 'support.class',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'support.constant.property-value',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'support.function',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'support.function.any-method',
        settings: {
          foreground: '#FF0000',
        }
      },
      {
        scope: 'support.function.gradient',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'support.function.misc',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'support.function.url',
        settings: {
          foreground: '#FF0000',
        },
      },
      {
        scope: 'support.type.property-name',
        settings: {
          foreground: '#FF0000',
        }
      },
      

      // VARIABLE
      {
        scope: 'variable',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'variable.interpolation',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'variable.other.constant',
        settings: {
          foreground: '#a079fc',
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: '#a079fc',
        },
      },
      
    ],
  };
};

module.exports = base;
