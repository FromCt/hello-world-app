import { Button, Typography, Card, Space } from 'antd'
import './App.css'

const { Title, Paragraph } = Typography

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f2f5' }}>
      <Card style={{ width: 400, textAlign: 'center' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>🦞 Hello World</Title>
          <Paragraph>
            Welcome to React + Ant Design + TypeScript
          </Paragraph>
          <Button type="primary" size="large">
            Get Started
          </Button>
        </Space>
      </Card>
    </div>
  )
}

export default App
