var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
			
			it('Deveria retornar 3 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3);
			});
			
			it('Deveria retornar -5 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-5);
			});
		});
		
		describe('Subtrair', function() {
			it('Deveria retornar 1 quando for passado 4 e 3.', function() {
				var numero1 = 4;
				var numero2 = 3;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1);
			});
			
		});

        describe('MultaLivro', function() {
            it('Deveria retornar 6 quando for passado 6.', function() {
                var numero1 = 6;

                var resultado = controller.utils.calculos.multaLivro(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(6);
            });

        });

        describe('MultaObraReferencia', function() {
            it('Deveria retornar 9 quando for passado 3.', function() {
                var numero1 = 3;

                var resultado = controller.utils.calculos.multaObraReferencia(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(9);
            });

        });

        describe('SomaMultaObraReferenciaApos40dias', function() {
            it('Deveria retornar 120 quando for passado 3.', function() {
                var numero1 = 3;

                var resultado = controller.utils.calculos.somaMultaObraReferenciaApos40dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(120);
            });

        });

        describe('MultaRevista', function() {
            it('Deveria retornar 8 quando for passado 4.', function() {
                var numero1 = 4;

                var resultado = controller.utils.calculos.multaRevista(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(8);
            });

        });

        describe('MultaJornal', function() {
            it('Deveria retornar 15 quando for passado 3.', function() {
                var numero1 = 3;

                var resultado = controller.utils.calculos.multaJornal(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(15);
            });

        });

        describe('SomarMultaLivroapos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivroapos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMultaJornalapos40dias', function() {
            it('Deveria retornar 205 quando for passado 5.', function() {
                var numero1 = 5;

                var resultado = controller.utils.calculos.somarMultaJornalapos40dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(205);
            });

        });

        describe('SomarMultasRevistaEJornalApos10Dias', function() {
            it('Deveria retornar 70 quando for passado 10.', function() {
                var numero1 = 10;

                var resultado = controller.utils.calculos.somarMultasRevistaEJornalApos10Dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(78);
            });

        });

        describe('SomaMultaRevistaapos40dias', function() {
            it('Deveria retornar 80 quando for passado 2.', function() {
                var numero1 = 2;

                var resultado = controller.utils.calculos.somaMultaRevistaapos40dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(80);
            });

        });

		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
			
			it('Deveria retornar -4 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar -4 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar 4 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});

		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar 0.25 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);

				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});

	describe('Testa se a função calcular funciona.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando somar 1 e 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'somar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
		});
		
		describe('Subtrair', function() {
		
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando multiplicar 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'multiplicar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando dividir 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'dividir'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});
	
	describe('Testa se as funções utilitárias funcionam.', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deveria retornar 1,56 quando passado 1.55555558.', function() {
				var resultado = 1.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('1,56');
			});
			
			it('Deveria retornar 0,00 quando passado undefined.', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});
});
