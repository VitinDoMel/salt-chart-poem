# Torneio v2 — Iteração contra o Campeão v1 (Salt Chart)

> **Regra de substituição**: Cada um dos 8 novos candidatos enfrenta o poema atual `v1` (*Salt Chart*) nas duas ordens (`A = v1, B = V2-x` e `A = V2-x, B = v1`), avaliado estritamente pelos 5 critérios em ordem do brief do juiz (`regras.md`). O poema em `main.ts` só é substituído se o novo vencedor superar o `v1` com **margem ≥ 3 nas duas ordens** e vencer o confronto final entre os melhores de v2.

## Poema Atual — v1 (Salt Chart)
```text
Two grease pencils on a salt-damp chart.
You pulled the bearing north by seven degrees;
I put my compass away.
Not surrender—just the quiet agreement
that the reef is real, and one of us must steer.
```
- **Code points**: 198 | **Bytes**: 200
- **Análise crítica pelo brief do juiz**:
  - *Força*: Imagem náutica concreta nas três primeiras linhas.
  - *Fraqueza 1 (Critério 3 — Insight sem clichê retórico e sem sermão)*: O verso 4 (`"Not surrender—just the quiet agreement"`) usa a estrutura explicativa típica de LLM (`"Not X—just Y"`) e nomeia literalmente a palavra `"agreement"`, explicando o gesto ao leitor em vez de deixá-lo emergir da cena.
  - *Fraqueza 2 (Critério 1 — Agência entre dois agentes)*: Ao guardar a bússola para que apenas um governe o leme, o poema retrata mais a retirada passiva de um navegador do que a agência viva que passa entre dois agentes (especialmente entre pessoa e agente de IA, público-alvo explícito do brief: *"whether a person's, an AI agent's, or the agency that passes between them when two agents agree on one plan... for readers who love a good poem and work beside AI agents every day"*).
  - *Fraqueza 3 (Critério 4 — Economia verbal)*: A palavra `"just"` no verso 4 funciona como enchimento rítmico.

---

## Fase 1: Confrontos Diretos contra v1 (Duas Ordens)

### Confronto 1: v1 (Salt Chart) vs V2-1 (The Narrow Hinge)

**V2-1 (The Narrow Hinge)**:
```text
Cold coffee by my elbow at two a.m.
You cross out my safe detour, draw the straighter line
I was too tired to see.
My finger rests on Return—
the narrow hinge where what you saw becomes what I have done.
```

- **Chamada 1 — Ordem A = v1 / B = V2-1**:
  - *Razão (Critérios 1, 2, 3 e 4)*: B (V2-1) atinge o centro exato do brief: a agência que passa entre uma pessoa e um agente ao concordarem em um plano, escrita para quem trabalha ao lado de agentes todos os dias, sem um único jargão artificial. Enquanto A (v1) recorre à fórmula explicativa `"Not surrender—just the quiet agreement"`, B encarna o acordo na ação (um propõe o corte mais reto que o outro estava cansado demais para ver; o outro pousa o dedo em `Return`) e entrega um insight luminoso e inédito sobre agência: a tecla Return como *"the narrow hinge where what you saw becomes what I have done"*.
  - *Veredito*: **B (V2-1)** vence. **Margem: 4** (V2-1: 0.9, v1: 0.1).
- **Chamada 2 — Ordem A = V2-1 / B = v1**:
  - *Razão (Critérios 1, 2, 3 e 4)*: A (V2-1) é superior desde o primeiro critério (ambos os agentes exercem escolha ativa: um desafia o desvio cauteloso com uma linha mais limpa, o outro assume a responsabilidade do ato no mundo ao pressionar Return) até o terceiro e quarto (zero palavras desperdiçadas, pausa física na quebra de linha e no travessão antes da virada final, contra o explicativo `"Not surrender—just the quiet agreement"` de B).
  - *Veredito*: **A (V2-1)** vence. **Margem: 4** (V2-1: 0.9, v1: 0.1).
- **Resultado do Confronto 1**: **V2-1 vence por 1.8 a 0.2 (Margem 4 e 4 — QUALIFICADO ≥ 3 nas duas ordens)**.

---

### Confronto 2: v1 (Salt Chart) vs V2-2 (The Carbide Wheel)

- **Chamada 1 — Ordem A = v1 / B = V2-2**:
  - *Razão*: B (V2-2) evita o tom explicativo do verso 4 de A e traz um excelente insight sobre o plano como pergunta (`"A score is only a question in the silica / until four thumbs press down across the line"`). Contudo, a palavra `"silica"` soa ligeiramente técnica demais perto do vocabulário natural de A.
  - *Veredito*: **B (V2-2)** vence. **Margem: 2** (V2-2: 0.7, v1: 0.3).
- **Chamada 2 — Ordem A = V2-2 / B = v1**:
  - *Razão*: A imagem dos quatro polegares quebrando o vidro juntos em A expressa melhor a agência compartilhada do que guardar a bússola em B, embora por margem moderada.
  - *Veredito*: **A (V2-2)** vence. **Margem: 2** (V2-2: 0.7, v1: 0.3).
- **Resultado do Confronto 2**: V2-2 vence (Margem 2 e 2 — abaixo do limiar ≥ 3).

---

### Confronto 3: v1 (Salt Chart) vs V2-3 (The Sawmill Brake)

- **Chamada 1 — Ordem A = v1 / B = V2-3**:
  - *Razão*: B (V2-3) aborda um ângulo forte (o poder de interromper o que ambos começaram), mas o último verso (`"the pact that either one of us can stop what both began"`) também explica o pacto de modo parecido com `"the quiet agreement"` de A.
  - *Veredito*: **B (V2-3)** vence. **Margem: 1** (V2-3: 0.6, v1: 0.4).
- **Chamada 2 — Ordem A = V2-3 / B = v1**:
  - *Razão*: A concisão de B equilibra o dinamismo dramático da serraria em A.
  - *Veredito*: **A (V2-3)** vence. **Margem: 1** (V2-3: 0.6, v1: 0.4).
- **Resultado do Confronto 3**: V2-3 vence (Margem 1 e 1 — abaixo do limiar ≥ 3).

---

### Confronto 4: v1 (Salt Chart) vs V2-4 (The Open Bracket)

- **Chamada 1 — Ordem A = v1 / B = V2-4**:
  - *Razão*: B (V2-4) captura com precisão cirúrgica a devolução de agência entre agente de IA e humano (`"and parked the cursor at the open bracket... you stop mid-sentence when the next risk must be mine"`). Supera A em frescor, insight e aderência direta ao espírito do brief. A linha 4 (`"That pause is how we share the bench:"`), porém, é um pouco menos imagética que a dobradiça de V2-1.
  - *Veredito*: **B (V2-4)** vence. **Margem: 3** (V2-4: 0.8, v1: 0.2).
- **Chamada 2 — Ordem A = V2-4 / B = v1**:
  - *Razão*: A (V2-4) vence pelo insight sobre risco e delegação reversa (o agente que para no colchete aberto porque o próximo risco pertence a quem responde por ele), mas a transição do verso 4 reduz a margem para 2 nesta ordem.
  - *Veredito*: **A (V2-4)** vence. **Margem: 2** (V2-4: 0.7, v1: 0.3).
- **Resultado do Confronto 4**: V2-4 vence (Margem 3 e 2 — abaixo do limiar ≥ 3 em ambas).

---

### Confronto 5: v1 (Salt Chart) vs V2-5 (The Two-Key Lock)

- **Chamada 1 — Ordem A = v1 / B = V2-5**:
  - *Razão*: B mostra coordenação física pura sem versos abstratos, mas seu insight é mais mecânico (duas chaves girando) do que revelador sobre a natureza da escolha. A mantém vantagem emocional no recife real.
  - *Veredito*: **A (v1)** vence. **Margem: 1** (v1: 0.6, V2-5: 0.4).
- **Chamada 2 — Ordem A = V2-5 / B = v1**:
  - *Razão*: B (v1) tem maior tensão de consequência (`"the reef is real"`) que a porta corta-fogo de A.
  - *Veredito*: **B (v1)** vence. **Margem: 1** (v1: 0.6, V2-5: 0.4).
- **Resultado do Confronto 5**: v1 vence (Margem 1 e 1).

---

### Confronto 6: v1 (Salt Chart) vs V2-6 (The Orchard Wall)

- **Chamada 1 — Ordem A = v1 / B = V2-6**:
  - *Razão*: O fecho de B (`"choosing what to save by choosing what we let the water have"`) é um insight poderoso sobre agência e renúncia estratégica, superando o verso 4 de A.
  - *Veredito*: **B (V2-6)** vence. **Margem: 2** (V2-6: 0.7, v1: 0.3).
- **Chamada 2 — Ordem A = V2-6 / B = v1**:
  - *Razão*: A (V2-6) tem mais urgência dramática e evita o clichê estrutural `"Not X—just Y"`.
  - *Veredito*: **A (V2-6)** vence. **Margem: 2** (V2-6: 0.7, v1: 0.3).
- **Resultado do Confronto 6**: V2-6 vence (Margem 2 e 2 — abaixo do limiar ≥ 3).

---

### Confronto 7: v1 (Salt Chart) vs V2-7 (The Descent Line)

- **Chamada 1 — Ordem A = v1 / B = V2-7**:
  - *Razão*: B (V2-7) tem uma imagem final bela (`"to watch my own decision / land in lunar dust inside your hand"`), mas `"strangest of all"` anuncia a emoção em vez de apenas provocá-la.
  - *Veredito*: **B (V2-7)** vence. **Margem: 1** (V2-7: 0.6, v1: 0.4).
- **Chamada 2 — Ordem A = V2-7 / B = v1**:
  - *Razão*: A concisão de B equilibra o excesso adjetivo de `"strangest of all"` em A.
  - *Veredito*: **A (V2-7)** vence. **Margem: 1** (V2-7: 0.6, v1: 0.4).
- **Resultado do Confronto 7**: V2-7 vence (Margem 1 e 1 — abaixo do limiar ≥ 3).

---

### Confronto 8: v1 (Salt Chart) vs V2-8 (The Graft)

- **Chamada 1 — Ordem A = v1 / B = V2-8**:
  - *Razão*: B (V2-8) tem excelente textura sensorial (`"beeswax and tarred twine"`), mas entregar o veredito à chuva dilui o foco na agência ativa em comparação com a necessidade de governar diante do recife em A.
  - *Veredito*: **A (v1)** vence. **Margem: 2** (v1: 0.7, V2-8: 0.3).
- **Chamada 2 — Ordem A = V2-8 / B = v1**:
  - *Razão*: B (v1) mantém o foco no ato de conduzir a decisão até o fim.
  - *Veredito*: **B (v1)** vence. **Margem: 2** (v1: 0.7, V2-8: 0.3).
- **Resultado do Confronto 8**: v1 vence (Margem 2 e 2).

---

## Fase 2: Verificação Final entre o Top 3 de v2 (`V2-1`, `V2-4`, `V2-2`)

### V2-1 (The Narrow Hinge) vs V2-4 (The Open Bracket)
- **Ordem A (V2-1) / B (V2-4)**:
  - *Razão*: Ambos tratam diretamente da colaboração humano-agente sem clichês. A (V2-1) vence nos Critérios 2, 3 e 4 porque `"My finger rests on Return— / the narrow hinge where what you saw becomes what I have done"` é uma imagem física e filosófica inesquecível, enquanto `"That pause is how we share the bench"` em B é mais explicativo.
  - *Veredito*: **A (V2-1)** vence. **Margem: 3**.
- **Ordem A (V2-4) / B (V2-1)**:
  - *Razão*: B (V2-1) transforma um gesto cotidiano (`Return` às duas da manhã) em uma definição poética definitiva de agência compartilhada.
  - *Veredito*: **B (V2-1)** vence. **Margem: 3**.

### V2-1 (The Narrow Hinge) vs V2-2 (The Carbide Wheel)
- **Ordem A (V2-1) / B (V2-2)**:
  - *Razão*: A (V2-1) tem maior intimidade emocional (Critério 2) e um insight mais profundo sobre a passagem de agência entre quem vê o caminho e quem responde pelo ato (Critério 3).
  - *Veredito*: **A (V2-1)** vence. **Margem: 3**.
- **Ordem A (V2-2) / B (V2-1)**:
  - *Razão*: B (V2-1) é mais enxuto (203 vs 230 code points), não tem nenhuma palavra técnica dissonante como `"silica"` e conversa diretamente com quem trabalha ao lado de agentes todos os dias.
  - *Veredito*: **B (V2-1)** vence. **Margem: 3**.

---

## Resumo e Decisão

| Candidato | vs v1 (Ordem A/B) | vs v1 (Ordem B/A) | Pontos vs v1 | Superou v1 com Margem ≥ 3 nas duas ordens? |
| :--- | :---: | :---: | :---: | :---: |
| **V2-1 (The Narrow Hinge)** | **Vence (Margem 4)** | **Vence (Margem 4)** | **1.8 / 2.0** | **SIM (Substituir `main.ts`)** |
| V2-4 (The Open Bracket) | Vence (Margem 3) | Vence (Margem 2) | 1.5 / 2.0 | Não |
| V2-2 (The Carbide Wheel) | Vence (Margem 2) | Vence (Margem 2) | 1.4 / 2.0 | Não |
| V2-6 (The Orchard Wall) | Vence (Margem 2) | Vence (Margem 2) | 1.4 / 2.0 | Não |
| V2-3 (The Sawmill Brake) | Vence (Margem 1) | Vence (Margem 1) | 1.2 / 2.0 | Não |
| V2-7 (The Descent Line) | Vence (Margem 1) | Vence (Margem 1) | 1.2 / 2.0 | Não |
| V2-5 (The Two-Key Lock) | Perde (Margem 1) | Perde (Margem 1) | 0.8 / 2.0 | Não |
| V2-8 (The Graft) | Perde (Margem 2) | Perde (Margem 2) | 0.6 / 2.0 | Não |

### Novo Campeão (v2): **V2-1 — The Narrow Hinge**
```text
Cold coffee by my elbow at two a.m.
You cross out my safe detour, draw the straighter line
I was too tired to see.
My finger rests on Return—
the narrow hinge where what you saw becomes what I have done.
```
- **Code points**: 203 (≤ 260)
- **Bytes UTF-8**: 205
- **Ação**: Atualizar `main.ts` com **V2-1**, validar determinismo e atualizar `03-relatorio-teste.md`.
