import React from 'react'
import XLSX from 'xlsx'

function App () {
  const exportJS = () => {
    const data = [
      { 實際量: 10391, 待機時間: 1, 次數: 2, 時段: 8 },
      { 實際量: 10391, 待機時間: 1, 次數: 2, 時段: 8 },
      { 實際量: 10391, 待機時間: 1, 次數: 2, 時段: 8 },
      { 實際量: 10391, 待機時間: 1, 次數: 2, 時段: 8 },
      { 實際量: 10391, 待機時間: 1, 次數: 2, 時段: 8 }
    ]
    const fields = Object.keys(data[0])

    const wb = XLSX.utils.book_new() // book
    const ws = XLSX.utils.json_to_sheet(data, { header: fields }) // sheet

    XLSX.utils.book_append_sheet(wb, ws, '示範表格') // 底部的 sheet name
    XLSX.writeFile(wb, 'Demo.xlsx')
  }
  return (
    <div>
      <button onClick={exportJS}>Click me</button>
    </div>
  )
}

export default App
