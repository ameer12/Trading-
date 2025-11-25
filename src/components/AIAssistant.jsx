import { useState } from 'react';
import { interpretIntent } from '../modules/aiCore';

export default function AIAssistant() {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleIntent = () => {
    const result = interpretIntent(input);
    setSuggestion(result);
  };

  return (
    <div className="ai-assistant">
      <h2>🤖 مساعد التداول الذكي</h2>
      <input
        type="text"
        placeholder="مثال: صفقة قصيرة على الذهب"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleIntent}>تحليل النية</button>
      {suggestion && <p>📌 اقتراح: {suggestion}</p>}
    </div>
  );
}
