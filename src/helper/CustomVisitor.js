import CalculadoraVisitor from "../grammar/CalculadoraVisitor.js";
import CalculadoraParser from "../grammar/CalculadoraParser.js";
import HashMap from 'hashmap';

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor extends CalculadoraVisitor {

	constructor() {
		super();
		this.memory = new HashMap();
	}

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#printExpr.
	visitPrintExpr(ctx) {
		const value = this.visit(ctx.expr());
	  	return value;
	}


	// Visit a parse tree produced by CalculadoraParser#assign.
	visitAssign(ctx) {
		console.log(ctx.getText());
		const id = ctx.ID().getText();
		const value = this.visit(ctx.expr());
		this.memory.set(id, value);
	  	return `${id} = ${value}`;
	}


	// Visit a parse tree produced by CalculadoraParser#blank.
	visitBlank(ctx) {
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CalculadoraParser#implicitMult.
	visitImplicitMult(ctx) {
	  let results = this.visitChildren(ctx)
		return results[0] * results[1];
	}

	// Visit a parse tree produced by CalculadoraParser#parens.
	visitParens(ctx) {
	  return this.visit(ctx.expr());
	}


	// Visit a parse tree produced by CalculadoraParser#MulDiv.
	visitMulDiv(ctx) {
		const left = this.visit(ctx.expr(0));
		const right = this.visit(ctx.expr(1));
		if (ctx.op.type === CalculadoraParser.MUL) return `${left} * ${right} = ${left * right}`;
	  	return `${left} / ${right} = ${Math.floor(left / right)}`;	// Division Entera
	}


	// Visit a parse tree produced by CalculadoraParser#AddSub.
	visitAddSub(ctx) {
		const left = this.visit(ctx.expr(0));
		const right = this.visit(ctx.expr(1));
		if (ctx.op.type === CalculadoraParser.ADD) return `${left} + ${right} = ${left + right}`;
	  	return `${left} - ${right} = ${left - right}`;
	}


	// Visit a parse tree produced by CalculadoraParser#id.
	visitId(ctx) {
		const id = ctx.ID().getText();
		if (this.memory.has(id)) return this.memory.get(id);
	  	return 0;
	}


	// Visit a parse tree produced by CalculadoraParser#int.
	visitInt(ctx) {
	  return parseInt(ctx.INT().getText());
	}



};