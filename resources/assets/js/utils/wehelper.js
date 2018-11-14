export function insertBlock (editor, template) {
    // Get current selection start.
    editor.selection.restore();
  
    let block = editor.selection.element();
  
    // Determine if block not in editor.
    if (block.classList.contains('fr-view')) {
      block = $('<p/>').appendTo(block).get(0);
    }
  
    let $blockParent;
    if (!editor.node.isBlock(block)) {
      $blockParent = $(editor.node.blockParent(block));
    } else {
      $blockParent = $(block);
    }
  
    // Ignore special element tags like div.
    var $template = $(template);
    if (!$template.is('div')) {
      $template = $template.wrap('p');
    }
  
    // Determine if block has empty text, be replaced that.
    if (isEmpty(editor, $blockParent)) {
      $blockParent.replaceWith($template);
    } else {
      $blockParent.after($template);
    }
  
    // Saving step.
    editor.undo.saveStep();
  }