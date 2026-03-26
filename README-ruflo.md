# Ruflo — Setup en este proyecto

## Qué es Ruflo
Ruflo (antes Claude Flow) es una plataforma de orquestación de agentes AI para Claude Code. Provee 215+ herramientas MCP, 99 agentes especializados, y un sistema de swarm intelligence.

## Qué se instaló
Ruflo se inicializó con `npx ruflo@latest init --wizard` y generó:

### Directorios y archivos creados
- `.claude-flow/` — Runtime config, data, logs, sessions, workflows, agents, hooks
- `.claude/agents/` — 99 agentes especializados
- `.claude/skills/` — 30 skills para Claude Code
- `.claude/commands/` — 10 comandos
- `.claude/helpers/` — Helpers del sistema
- `.claude/settings.json` — Configuración de hooks y permisos
- `.mcp.json` — Configuración MCP local

### Integración MCP
Se configuró Ruflo como MCP server para Claude Code:
```
claude mcp add ruflo -- npx -y ruflo@latest mcp start
```

## Cómo arrancarlo

### Iniciar el daemon (workers en background)
```bash
npm run ruflo:daemon
# o directamente:
npx ruflo@latest daemon start
```

### Iniciar servidor MCP
```bash
npm run ruflo:mcp
# o directamente:
npx ruflo@latest mcp start
```

### Listar agentes disponibles
```bash
npm run ruflo:agents
```

### Ver ayuda
```bash
npm run ruflo:help
```

## Scripts disponibles en package.json
| Script | Descripción |
|--------|-------------|
| `npm run ruflo:init` | Re-inicializar Ruflo |
| `npm run ruflo:mcp` | Arrancar servidor MCP |
| `npm run ruflo:help` | Ver ayuda general |
| `npm run ruflo:agents` | Listar agentes |
| `npm run ruflo:daemon` | Arrancar daemon en background |

## Cómo usarlo en este proyecto
1. Abre Claude Code en este directorio
2. Ruflo se conecta automáticamente como MCP server
3. Puedes invocar agentes y skills desde Claude Code
4. Los workflows se guardan en `.claude-flow/workflows/`
5. Los logs quedan en `.claude-flow/logs/`

## Notas
- Ruflo NO modifica código de producción
- Los archivos de Ruflo están en directorios dot (`.claude/`, `.claude-flow/`)
- La versión instalada es v3.5.x (estable)
