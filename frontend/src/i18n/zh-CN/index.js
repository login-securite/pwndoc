export default {
    generalSettings: '通用设置',
    changeDisplayLanguage: '界面显示语言',
    changeDisplayLanguageInfo: '为平台设置默认的显示语言',
    nav: {
        audits: '项目审计',
        vulnerabilities: '漏洞管理',
        data: '数据管理',
    },
    btn: {
        cancel: '取消',
        confirm: '确认',
        create: '创建',
        topButtonSection: {
            submitReview: '提交审核',
            cancelReview: '取消审核',
            approve: '批准',
            removeApproval: '移除批准',
        },
        backupFinding: "提议在漏洞库中创建/更新",
        delete: '删除',
        save: '保存',
        update: '更新',
        deleteAll: '全部删除',
        enable: '启用',
        valid: '有效的',
        new: '新的',
        updates: '有更新的',
    },
    tooltip: {
        usersConnected: '正在做审计的用户',
        editAudit: '编辑审计',
        downloadReport: '下载报告',
        deleteAudit: '删除审计',
        topButtonSection: {
            submitReview: '标记项目已准备好审核',
            cancelReview: '更改项目时需先取消审核',
            approve: '对该项目审核通过',
            removeApproval: '对该项目移除审核通过',
        },
        sortOptions: '排序选项',
        addToFindings: '添加到问题发现',
        edit: '编辑',
        view: '查看',
        findAudits: '查找审计项目',
        delete: '删除',
        download: '下载',
    },
    msg: {
        auditReviewUpdateOk: '项目审核状态更新成功',
        auditApprovalUpdateOk: '项目批准状态更新成功',
        auditUpdateOk: '项目更新成功',
        findingCreateOk: '问题创建成功',
        findingUpdateOk: '问题更新成功',
        findingDeleteOk: '问题删除成功',
        doYouWantToLeave: '你确定要离开吗？',
        thereAreUnsavedChanges: '有未保存的更改！',
        fieldRequired: '请填写所有必填字段',
        deleteFindingConfirm: '确认删除当前问题？',
        deleteFindingNotice: '此操作无法被取消',
        selectHost: '选择主机IP',
        importHostsFirst: '注意：请务必先导入扫描结果，下拉选中主机后IP再点击加号',
        auditTypeNotSet: '审计类型未设置',
        sectionUpdateOk: '段落更新成功',
        lastnameRequired: '“姓”未填写',
        firstnameRequired: '“名”未填写',
        emailRequired: '邮箱未填写',
        clientCreatedOk: '客户创建成功',
        clientUpdatedOk: '客户更新成功',
        clientDeletedOk: '客户删除成功',
        deleteNotice: '将被永久删除',
        confirmSuppression: '请您确认',
        usernameRequired: '用户名未填写',
        passwordRequired: '密码未填写',
        currentPasswordRequired: '当前密码未填写',
        confirmPasswordDifferents: '新密码与确认密码不相同',
        collaboratorCreatedOk: '审计员创建成功',
        collaboratorUpdatedOk: '审计员更新成功',
        collaboratorDeletedOk: '审计员删除成功',
        nameRequired: "名称未填写",
        fileRequired: '文件未上传',
        companyCreatedOk: '公司创建成功',
        companyUpdatedOk: '公司更新成功',
        companyDeletedOk: '公司删除成功',
        templateNotFound: '未找到模板',
        templateCreatedOk: '模板创建成功',
        templateUpdatedOk: '目标更新成功',
        allVulnerabilitesDeleteNotice: '所有漏洞将会被永久删除？',
        allVulnerabilitesDeleteOk: '所有漏洞删除成功',
        profileUpdateOk: '个人信息更新成功',
        settingsUpdatedOk: '系统设置更新成功',
        revertingSettings: '还原系统配置！',
        revertingSettingsConfirm: '您确认要还原系统配置吗？您将失去所有当前配置。',
        importingSettings: '导入系统配置！',
        importingSettingsConfirm: '您确认要导入系统配置吗？您将失去所有当前配置。',
        settingsImportedOk: '系统配置导入成功',
        vulnerabilityCreatedOk: '漏洞创建成功',
        vulnerabilityUpdatedOk: '漏洞更新成功',
        vulnerabilityDeletedOk: '漏洞删除成功',
        vulnerabilityWillBeDeleted: '漏洞将会被永久删除',
        confirmCategoryChange: '确认类别更改',
        categoryChangingNotice: '更改类别将会影响自定义字段显示',
        vulnerabilityMergeOk: '漏洞合并成功',
        tryingToContactBackend: '<p>尝试连接后端服务</p>',
        wrongContactingBackend: '连接后端服务失败',
    },
    err: {
        notDefinedLanguage: '没有定义这种语言',
        invalidYamlFormat: '检测到无效的 YAML 格式',
        parsingError1: '解析错误： {0}',
        parsingError2: '解析错误： line {0}， column: {1}',
        invalidJsonFormat: '检测到无效的 JSON 格式',
        jsonMustBeAnObject: 'JSON 必须为 object。',
        importingSettingsError: '导入系统配置错误',
        errorWhileParsingJsonContent: '解析JSON内容出错：{0}',
        titleRequired: '标题未填写',
        expiredToken: 'token过期',
        invalidToken: '无效token',
        invalidCredentials: '无效身份',
    },
    cvss: {
        title: 'CVSSv3 基础评分',
        infoWhenNoScore: '选择所有基本指标的值以生成分数',
        attackVector: '攻击向量',
        attackComplexity: '攻击复杂度',
        privilegesRequired: '权限需求',
        userInteraction: '用户交互',
        scope: '作用域',
        confidentialityImpact: '保密性影响',
        integrityImpact: '完整性影响',
        availabilityImpact: '可用性影响',
        network: '互联网',
        adjacentNetwork: '临近网络',
        local: '局域网',
        physical: '物理',
        low: '低',
        high: '高',
        required: '需要',
        none: '无',
        unchanged: '不变',
        changed: '改变',
    },
    registerFirstUser: '注册第一个用户',
    customData: '自定义数据',
    custom: '自定义',
    settings: '系统设置',
    profile: '个人信息',
    logout: '退出登录',
    login: '登录',
    username: '用户名',
    password: '密码',
    noLanguage: '没有定义语言，请在如下位置定义语言',
    noAudit: '没有定义审计类型，请在如下位置定义审计类型',
    auditTypes: '审计类型',
    searchFinds: '搜索查找',
    myAudits: '我的审计',
    usersConnected: '已在线连接用户',
    awaitingMyReview: '等待我审核',
    newAudit: '新的审计',
    search: '搜索',
    users: '用户',
    auditNum1: '个审计项目',
    auditNums: '个审计项目',
    resultsPerPage: '每页结果数量：',
    createAudit: '创建审计',
    name: '名称',
    selectAssessment: '选择评估类型',
    selectLanguage: '选择语言',
    participants: '审计员',
    language: '语言',
    company: '公司',
    companies: '公司',
    date: '日期',
    sections: '段落',
    generalInformation: '基本信息',
    networkScan: '网络扫描',
    findings: '问题发现',
    automaticSorting: '自动排序',
    sortBy: '排序按',
    sortOrder: '排序顺序',
    ascending: '升序',
    descending: '降序',
    me: '我',
    cvssScore: 'CVSS分值',
    priority: '优先级',
    remediation: '修复',
    remediationDifficulty: '修复难度',
    remediationComplexity: '修复复杂度',
    remediationPriority: '修复优先级',
    easy: '简单',
    medium: '中等',
    complex: '复杂',
    low: '低',
    high: '高',
    urgent: '紧急',
    title: '标题',
    category: '漏洞类别',
    selectCategory: '选择漏洞类别',
    noCategory: '无类别',
    vulnType: '漏洞类型',
    undefined: '未定义',
    vulnerabilityNum1: '个漏洞',
    vulnerabilitiesNums: '个漏洞',
    definition: '定义',
    proofs: '证明',
    details: '细节',
    completed: '已完成',
    type: '类型',
    description: '说明',
    observation: '观测',
    references: '参考资料（每条1行）',
    customFields: '自定义字段',
    affectedAssets: '受影响资产',
    courseOfActions: '行动方案',
    template: '模板',
    client: '客户',
    reviewers: '审核人员',
    collaborator: '审计员',
    collaborators: '审计员',
    startDate: '开始日期',
    endDate: '结束日期',
    reportingDate: '报告日期',
    auditScope: '范围（每个一行）',
    import: '导入',
    export: '导出',
    hostsAssociateScopes: '将导入的主机与范围关联',
    handleCustomData: '处理自定义数据',
    companies: '公司',
    clients: '客户',
    templates: '模板',
    addClient: '添加客户',
    editClient: '编辑客户',
    firstname: '名',
    lastname: '姓',
    email: '邮箱',
    function: '职能',
    phone: '座机',
    cell: '手机',
    role: '角色',
    collatorator: '审计员',
    addCollaborator: '添加审计员',
    editCollaborator: '编辑审计员',
    addCompany: '添加公司',
    editCompany: '编辑公司',
    logo: '图标',
    quantifier: '个',
    languages: '语言',
    extension: '扩展名',
    createTemplate: '创建模板',
    file: '文件',
    editTemplate: '编辑模板',
    importVulnerabilities: '导入漏洞',
    importVulnerabilitiesInfo: `从一个.yml或.json文件导入漏洞。（支持 Serpico 格式）<br />
    本操作可使您轻松导入一批漏洞模板。`,
    importVulnerabilitiesOk: '全部 <strong>{0}</strong> 个漏洞创建成功',
    importVulnerabilitiesAllExists: '全部 <strong>{0}</strong> 个漏洞标题已存在',
    importVulnerabilitiesPartial: '<strong>{0}</strong> 个漏洞创建成功<br /><strong>{1}</strong> 个漏洞标题已存在',
    exportVulnerabilities: '导出漏洞',
    exportVulnerabilitiesInfo: `将漏洞导出为 yaml 格式。之后可以轻松地重新导入此导出。`,
    deleteAllVulnerabilities: '删除所有漏洞',
    deleteAllVulnerabilitiesInfo: `删除库中所有漏洞。<br />
    <strong>本操作不可逆！！</strong>`,
    customSections: '自定义段落',
    listOfLanguages: '语言列表',
    editLanguages: '编辑语言',
    locale: 'Locale',
    auditTypesUsedInAudits: '审计中用到的审计类型',
    languageUsedInAuditsAndVuls: '在审计和漏洞中使用的语言',
    addSections: '添加段落',
    hideBuiltInSections: '隐藏内置段落',
    listOfAuditTypes: '审计类型列表',
    editAuditTypes: '编辑审计类型',
    createAtLeastOneLanguage: '请至少创建一种语言',
    createVulnerabilityTypes: '创建漏洞类型以便在漏洞管理和问题发现中使用',
    vulnerabilityTypesList: '漏洞类型列表',
    editVulnerabilityTypes: '编写漏洞类型',
    createVulnerabilityCategories: '创建漏洞类别以便在漏洞管理和漏洞发现中使用',
    defaultSortingOptions: '默认排序选项',
    listOfCategories: '漏洞类别列表',
    editCategories: '编辑漏洞类别',
    createAndManageCustomFields: '为不同视图创建和管理自定义表单',
    selectView: '选择视图',
    selectSection: '选择段落',
    selectComponent: '选择组件',
    label: '标签',
    size: '字体',
    offset: '偏移',
    required: '必填项',
    optionsLanguage: '选择语言',
    addOption: '添加选项',
    languageForDefaultText: '语言（用于默认文本）',
    createCustomSections: '创建自定义段落以便在审计中使用',
    fieldForTemplate: '字段（用于模板）',
    customIcon: '图标（Material/Font Awesome）',
    field: '字段',
    editSections: '编辑段落',
    vulnerabilityTypes: '漏洞类型',
    vulnerabilityCategories: '漏洞类别',
    auditGeneral: '审计编辑 -  常规',
    auditFinding: '审计编辑 -  问题发现',
    auditSection: '审计编辑 -  段落',
    vulnerability: '漏洞编辑',
    checkbox: '复选框',
    date: '日期',
    editor: '编辑器',
    input: '输入框',
    radio: '单选框',
    select: '下拉列表（单选）',
    selectMultiple: '下拉列表（多选）',
    space: '空格填充',
    updateUserInformation: '更新用户信息',
    newPassword: '新密码',
    confirmPassword: '确认密码',
    currentPassword: '当前密码 *',
    reports: '报告',
    reportsImagesBorder: '报告图片边框',
    addBorderToImages: '在生成的报告中，给图片添加边框。',
    currentColor: '当前颜色：',
    cvssColors: 'CVSS 颜色',
    changeCvssColorsDescription: '在生成的报告中，给不同CVSS严重性设置不同的颜色。',
    critical: '紧急',
    informational: '信息性',
    reviews: '审核',
    auditUpdateAfterApproval: '在审核通过后更新审计项目',
    changeApproveBehaviorIfAuditUpdated: '当审计项目更新后，修改审核通过状态时将执行：',
    removeAllPriorApprovals: '移除所有该项目之前的批准',
    keepAllPriorApprovals: '保留所有该项目之前的批准',
    mandatoryReview: '强制性审核',
    mandatoryReviewInfo: `使审查过程成为强制性的。 <br />激活后，用户无法导出审核，除非已获得指定数量的审核者批准。
    <br/>最少数量的审阅者还用于确定报告是否标记为已批准。`,
    minimalNumberOfReviewers: '审核者的最少数量',
    saveSettings: '保存系统设置',
    revertSettingsToDefaults: '还原默认系统设置',
    importSettings: '导入系统设置',
    exportSettings: '导出系统设置',
    mergeVulnerabilities: '合并漏洞',
    mergeVulnerabilitiesInfo: `本操作的目标是将不同语言的不同漏洞合并到同一个漏洞中。<br /> 
    所以必须至少存在 2 种语言。`,
    newVulnerability: '新漏洞',
    total: '总共',
    addVulnerability: '添加漏洞',
    editVulnerability: '编辑漏洞',
    changeCategory: '修改类别',
    listOfSections: '段落列表',
    updateVulnerability: '更新漏洞',
    current: '当前的',
    languageAddFromRight: '语言（从右侧添加）',
    languageMoveToLeft: '语言（移动到左侧）',
    merge: '合并',
    goBack: '返回',
  }