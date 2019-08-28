package org.iaas.toscaYaml.ui.highlighting

import org.eclipse.xtext.ui.editor.syntaxcoloring.DefaultHighlightingConfiguration
import org.eclipse.xtext.ui.editor.syntaxcoloring.IHighlightingConfigurationAcceptor
import org.eclipse.xtext.ui.editor.utils.TextStyle
import org.eclipse.swt.graphics.RGB
import org.eclipse.swt.SWT

class YamlHighlightingConfiguration extends DefaultHighlightingConfiguration {
	
	
	override configure(IHighlightingConfigurationAcceptor acceptor) {
		super.configure(acceptor);
	}
	
	def TextStyle attributeNameTextStyle() {
		val textStyle = defaultTextStyle().copy();
		textStyle.setColor(new RGB(255, 0, 0));
		textStyle.setStyle(SWT.BOLD);
		return textStyle;
	}
	
	/**
	 * remove keyword highlighting
	 */
	override TextStyle keywordTextStyle() {
		val textStyle = defaultTextStyle().copy();
		//textStyle.setColor(new RGB(127, 0, 85));
		//textStyle.setStyle(SWT.BOLD);
		return textStyle;
	}
}
