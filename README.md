# Sistema de Controle de Cancelas de Estacionamento (SRS) - Estacionamento UNINASSAU S.A

**Versão:** 1.0  
**Data:** 04/11/2025  
**Nome do Estacionamento:** ESTACIONAMENTO UNINASSAU S.A

## 1. Visão Geral
**Objetivo:** Definir os requisitos para um sistema que gerencia cancelas de entrada e saída em um estacionamento, com suporte a usuários (funcionários, alunos e visitantes), saldos pré-pagos, descontos e cálculo automático do valor com base no tempo de permanência.

**Motivação:** Melhorar o fluxo operacional (reduzindo filas), garantir precisão na cobrança e prover transparência aos usuários quanto a saldo e histórico.

**Escopo (alto nível):**
*   Controle de cancelas (entrada/saída) com operação automática e manual.
*   Identificação de veículos (placa, cartão RFID, QR, ticket).
*   Cadastro e gestão de contas pré-pagas (funcionários e alunos).
*   Emissão de tickets para visitantes (pós-pago ou pré-pago avulso).
*   Cálculo de cobrança por tempo de permanência (com regras de desconto).
*   Consulta de saldo, extrato, e recargas.
*   Relatórios operacionais e financeiros.
*   Auditoria e trilhas de log.

**Fora de escopo (inicial):**
*   Reconhecimento de placas por câmera (LPR) de terceiros — previsto como integração futura.
*   Integração direta com ERPs.
*   Aplicativos mobile nativos (usar PWA na fase 1).

## 2. Stakeholders & Perfis de Usuário
*   **Administrador do Sistema (TI/Operações):** gerencia parâmetros, tarifas, regras, usuários e integrações.
*   **Operador/Portaria:** acompanha eventos em tempo real, libera manualmente cancelas, emite tickets visitantes, resolve exceções.
*   **Financeiro:** acompanha saldos, conciliações, relatórios de receita, descontos aplicados.
*   **Funcionário (usuário final):** possui cadastro, veículo(s) e saldo pré-pago; entra/saí automaticamente ou por liberação manual em contingência.
*   **Aluno (usuário final):** perfil idêntico ao Funcionário para efeitos de saldo, com regras de desconto específicas.
*   **Visitante:** recebe ticket e paga por uso (no caixa/autoatendimento/online); pode ter validação por convênio.

## 3. Definições e Abreviações
*   **Cancela:** barreira física de controle de acesso (entrada/saída).
*   **Estadia:** período entre a passagem na cancela de entrada e a saída.
*   **Conta Pré-paga:** carteira digital com créditos para uso do estacionamento.
*   **Ticket:** comprovante com identificador único para visitantes.
*   **PWA:** Progressive Web App.

## 4. Requisitos Funcionais (RF)
*(Ver documento completo para detalhes)*

## 5. Regras de Negócio (RN)
*(Ver documento completo para detalhes)*

## 6. Casos de Uso (UC)
*(Ver documento completo para detalhes)*

## 7. Fluxos Principais
*(Ver documento completo para detalhes)*

## 8. Requisitos Não Funcionais (RNF)
*(Ver documento completo para detalhes)*

## 9. Modelo de Dados
*(Ver documento completo para detalhes)*
