import re

terms_0428 = ["Arabella", "Flindo", "Hawk", "Kane"] 
terms_042A = ["Flindo", "Filbercio", "Shamino", "Hawk", "Kane", "Ensorcio", "Ale", "Vasculio", "Mortegro", "Devra", "Angus", "Argus", "Donal", "Silverpate", "Wilfred", "Frigidazzi", "Columna", "Stefano", "Torrissio", "Petra", "Rocco", "Julia", "Fedabiblio", "Erstam", "Pothos", "Bucia"] 

with open('Extracted_Terms.md', 'r', encoding='utf-8') as f:
    content = f.read()

def append_source(content, term, source):
    pattern = r"(- \*\*" + re.escape(term) + r"\*\* ➔.*?) \[(出自.*?)\]"
    def repl(m):
        prefix = m.group(1)
        sources_str = m.group(2)
        sources = [s.strip() for s in sources_str.replace("出自", "").split(",")]
        if source not in sources:
            sources.append(source)
        return prefix + " [出自 " + ", ".join(sources) + "]"
    return re.sub(pattern, repl, content)

for t in terms_0428:
    content = append_source(content, t, "0428_zh.es")

for t in terms_042A:
    content = append_source(content, t, "042A_zh.es")

# Add missing terms
content = content.replace("- **Selenia** ➔ **Selenia** (夜之女巫) [出自 040D_zh.es]", "- **Selenia** ➔ **Selenia** (夜之女巫) [出自 040D_zh.es]\n- **Selina** ➔ **Selina** (漂亮的小姑娘，乘客，據稱想回蒙利多城) [出自 0428_zh.es, 042A_zh.es]")

stefano_line = re.search(r"- \*\*Stefano\*\*.*", content).group(0)
content = content.replace(stefano_line, stefano_line + "\n- **Theron** ➔ **Theron** (睡牛旅店員工，因風暴失蹤) [出自 042A_zh.es]")

with open('Extracted_Terms.md', 'w', encoding='utf-8') as f:
    f.write(content)
