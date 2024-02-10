// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CalculadoraVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#printExpr.
	visitPrintExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#assign.
	visitAssign(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#blank.
	visitBlank(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#implicitMult.
	visitImplicitMult(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#parens.
	visitParens(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#MulDiv.
	visitMulDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#AddSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#id.
	visitId(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#int.
	visitInt(ctx) {
	  return this.visitChildren(ctx);
	}



}