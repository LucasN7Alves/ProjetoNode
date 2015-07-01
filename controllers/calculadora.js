module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				
				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			
			calculos: {
				calcular: function(parametros) {
					var numero1 = parseFloat(parametros.numero1);
					var numero2 = parseFloat(parametros.numero2);
					
					var resultado = Controller.utils.calculos[parametros.operacao](numero1, numero2);
					
					return resultado;
				},
				
				somar: function(numero1, numero2) {
					return numero2 + numero1;
				},
				
				subtrair: function(numero1, numero2) {
					return numero1 - numero2;
				},
				
				multiplicar: function(numero1, numero2) {
					return numero1 * numero2;
				},
				
				dividir: function(numero1, numero2) {
					return numero1 / numero2;
				},

                multaLivro: function(numero1) {
                    return numero1 * 1;
                },

                somarMultaLivroapos30dias: function(numero1) {

                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    return resultado;
                },

                multaObraReferencia: function(numero1) {
                    return numero1 * 3;
                },

                somaMultaObraReferenciaApos40dias: function(numero1) {
                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    return resultado;
                },

                multaRevista: function(numero1) {
                    return numero1 * 2;
                },

                somaMultaRevistaapos40dias: function(numero1) {
                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    return resultado;
                },

                multaJornal: function(numero1) {
                    return numero1 * 5;
                },

                somarMultaJornalapos40dias: function(numero1) {
                   resultado = Number(0);
                    resultado += numero1;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    return resultado;
                },



                somarMultasRevistaEJornalApos10Dias: function(numero1) {
                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 2;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    resultado += 5;
                    return resultado;
                }


			},
			
			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}
				
				return 0.0;
			},
			
			extrairParametros: function(body) {
				var parametros = {
					numero1: 0.0,
					numero2: 0.0,
					operacao: body.operacao
				};
				
				parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				parametros.numero2 = Controller.utils.validaParametro(body.numero2);
				
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			somar: function(request, response) {
				response.render('somar');
			},
			
			subtrair: function(request, response) {
				response.render('subtrair');
			},
			
			multiplicar: function(request, response) {
				response.render('multiplicar');
			},
			
			dividir: function(request, response) {
				response.render('dividir');
			}
		},
		
		post: {
			calcular: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				
				response.render(parametros.operacao, resposta);
			}
		}
	};
	
	return Controller;
};
