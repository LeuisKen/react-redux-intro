import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Row, Col, Form, Select, Button } from 'antd'

import styles from './searchForm.css'

const createForm = Form.create
const FormItem = Form.Item
const Option = Select.Option

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }
      this.props.onSearch(values.key)
    });
  }
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }
  handleSelect(value) {
    this.setState({
      value
    })
  }
  render() {
    const { title, defaultValue } = this.props
    const { getFieldProps } = this.props.form
    return (
      <Row>
        <Col offset="6" span="12">
          <h2 styleName="title">{title}</h2>
          <Form horizontal form={this.props.form}>
            <FormItem
              required
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 10 }}
              hasFeedback
              label="搜索关键字：">
              <Select
                {...getFieldProps('key', {
                rules: [
                  { required: true, whitespace: true, message: '搜索关键字不应为空' },
                ],
              })} value={this.state.value} onSelect={this.handleSelect.bind(this)}>
                <Option value="react">react</Option>
                <Option value="react-native">react-native</Option>
                <Option value="nuclide">nuclide</Option>
                <Option value="relay">relay</Option>
                <Option value="jest">jest</Option>
              </Select>
            </FormItem>
            <div styleName="buttonContainer">
              <Button styleName="submit" type="primary" onClick={this.handleSubmit.bind(this)}>
                提交
              </Button>
              <Button type="ghost" onClick={this.handleReset.bind(this)}>
                重置
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default createForm()(CSSModules(SearchForm, styles))
