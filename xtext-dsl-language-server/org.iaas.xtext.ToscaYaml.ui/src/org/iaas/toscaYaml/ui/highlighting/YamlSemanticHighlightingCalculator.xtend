package org.iaas.toscaYaml.ui.highlighting

import org.iaas.toscaYaml.services.YamlGrammarAccess
import com.google.inject.Inject
import org.eclipse.xtext.ide.editor.syntaxcoloring.DefaultSemanticHighlightingCalculator
import org.eclipse.emf.ecore.EObject
import org.eclipse.xtext.util.CancelIndicator
import org.eclipse.xtext.ide.editor.syntaxcoloring.IHighlightedPositionAcceptor
import org.eclipse.xtext.ide.editor.syntaxcoloring.HighlightingStyles
import org.iaas.toscaYaml.yaml.YamlPackage
import org.iaas.toscaYaml.yaml.Attribute

class YamlSemanticHighlightingCalculator extends DefaultSemanticHighlightingCalculator {
	
    @Inject package YamlGrammarAccess grammar
    
    override protected boolean highlightElement(EObject object, IHighlightedPositionAcceptor acceptor,
        CancelIndicator cancelIndicator) {
        switch (object) {
            Attribute: {
                highlightFeature(acceptor, object, YamlPackage.eINSTANCE.attribute_Name, HighlightingStyles.STRING_ID)
                return true
            }
            default: {
            	return false
            } 
        }
    }
}
