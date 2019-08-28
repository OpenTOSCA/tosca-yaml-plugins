define(["ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules"], function(oop, mText, mTextHighlightRules) {
	var HighlightRules = function() {
		var keywords = "B|GB|GHz|Gb|Hz|KB|Kb|MB|MHz|Mb|TB|Tb|b|d|directives|entry_schema|external_schema|gB|gb|h|kB|kHz|kb|m|mB|mb|metadata|ms|ns|properties|s|tB|tb|tosca_definitions_version|tosca_simple_yaml_1_2|us";
		this.$rules = {
			"start": [
				{token: "lparen", regex: "[\\[{]"},
				{token: "rparen", regex: "[\\]}]"},
				{token: "keyword", regex: "\\b(?:" + keywords + ")\\b"}
			]
		};
	};
	oop.inherits(HighlightRules, mTextHighlightRules.TextHighlightRules);
	
	var Mode = function() {
		this.HighlightRules = HighlightRules;
	};
	oop.inherits(Mode, mText.Mode);
	Mode.prototype.$id = "xtext/yml";
	Mode.prototype.getCompletions = function(state, session, pos, prefix) {
		return [];
	}
	
	return {
		Mode: Mode
	};
});
