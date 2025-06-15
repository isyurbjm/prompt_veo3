'use client';
import { useState } from "react";

export default function VeoPromptGenerator() {
  const [genre, setGenre] = useState("");
  const [setting, setSetting] = useState("");
  const [action, setAction] = useState("");
  const [effects, setEffects] = useState("");
  const [characters, setCharacters] = useState([""]);
  const [output, setOutput] = useState("");

  const handleCharacterChange = (index, value) => {
    const updated = [...characters];
    updated[index] = value;
    setCharacters(updated);
  };

  const addCharacter = () => {
    setCharacters([...characters, ""]);
  };

  const generatePrompt = () => {
    const characterList = characters
      .filter((c) => c.trim())
      .map((char, i) => `- ${char}`)
      .join("\n");
    const prompt = `🎬 Prompt untuk Veo v3\n\nGenre: ${genre}\nSetting: ${setting}\nAksi: ${action}\nEfek Tambahan: ${effects}\n\nKarakter:\n${characterList}`;
    setOutput(prompt);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>🎬 Veo Prompt Generator</h1>
      <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} style={{ width: "100%", marginTop: 8 }} />
      <textarea placeholder="Setting" value={setting} onChange={(e) => setSetting(e.target.value)} style={{ width: "100%", marginTop: 8 }} />
      <textarea placeholder="Aksi" value={action} onChange={(e) => setAction(e.target.value)} style={{ width: "100%", marginTop: 8 }} />
      <textarea placeholder="Efek Tambahan" value={effects} onChange={(e) => setEffects(e.target.value)} style={{ width: "100%", marginTop: 8 }} />

      <div style={{ marginTop: 8 }}>
        <p><strong>Karakter:</strong></p>
        {characters.map((char, idx) => (
          <input key={idx} placeholder={`Karakter ${idx + 1}`} value={char} onChange={(e) => handleCharacterChange(idx, e.target.value)} style={{ width: "100%", marginBottom: 4 }} />
        ))}
        <button onClick={addCharacter}>➕ Tambah Karakter</button>
      </div>

      <button onClick={generatePrompt} style={{ marginTop: 12 }}>Generate Prompt 🎥</button>

      {output && (
        <pre style={{ whiteSpace: "pre-wrap", background: "#f0f0f0", padding: 10, marginTop: 10 }}>{output}</pre>
      )}
    </div>
  );
}
