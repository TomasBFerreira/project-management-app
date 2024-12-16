const projectRoutes = require('./routes/projects');
const cors = require('cors');
const mongoose = require('mongoose');

app.use('/api/projects', projectRoutes);
app.use(cors());

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Project', ProjectSchema);
