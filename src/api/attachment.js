import service from './service'

const baseUrl = `${service.apiVersion}/attachments`

const attachmentApi = {}

attachmentApi.query = params => {
  return service({
    url: baseUrl,
    params: params,
    method: 'get'
  })
}

attachmentApi.get = attachmentId => {
  return service({
    url: `${baseUrl}/${attachmentId}`,
    method: 'get'
  })
}

attachmentApi.delete = attachmentId => {
  return service({
    url: `${baseUrl}/${attachmentId}`,
    method: 'delete'
  })
}

attachmentApi.update = (attachmentId, attachment) => {
  return service({
    url: `${baseUrl}/${attachmentId}`,
    method: 'put',
    data: attachment
  })
}

attachmentApi.getMediaTypes = () => {
  return service({
    url: `${baseUrl}/media_types`,
    method: 'get'
  })
}

attachmentApi.upload = (formData, uploadProgress, cancelToken) => {
  return service({
    url: `${baseUrl}/upload`,
    timeout: 8640000, // 24 hours
    data: formData, // form data
    onUploadProgress: uploadProgress,
    cancelToken: cancelToken,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

attachmentApi.uploads = (formDatas, uploadProgress, cancelToken) => {
  return service({
    url: `${baseUrl}/uploads`,
    timeout: 8640000, // 24 hours
    data: formDatas, // form data
    onUploadProgress: uploadProgress,
    cancelToken: cancelToken,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

attachmentApi.type = {
  LOCAL: {
    type: 'local',
    text: '本地'
  },
  SMMS: {
    type: 'smms',
    text: 'SM.MS'
  },
  UPYUN: {
    type: 'upyun',
    text: '又拍云'
  },
  QNYUN: {
    type: 'qnyun',
    text: '七牛云'
  },
  ALIYUN: {
    type: 'aliyun',
    text: '阿里云'
  }
}

export default attachmentApi
