import React from 'react';
import { 
  Terminal, 
  Zap, 
  Settings, 
  Code, 
  Download, 
  GitBranch, 
  Star,
  ExternalLink,
  CheckCircle,
  Copy,
  ArrowRight,
  Layers,
  FileText,
  Gauge
} from 'lucide-react';

function App() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "CQRS Generation",
      description: "Generate commands, queries, and handlers with a single command. Follow CQRS patterns effortlessly."
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Clean Architecture",
      description: "Create classes and interfaces following Clean Architecture principles and best practices."
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: "Fully Customizable",
      description: "Customize templates and configuration to match your project's coding standards and patterns."
    },
    {
      icon: <Gauge className="w-8 h-8 text-orange-500" />,
      title: "Fast & Scriptable",
      description: "Lightning-fast generation with scriptable commands. Perfect for automation and CI/CD pipelines."
    }
  ];

  const examples = [
    {
      command: "dct create command User/CreateUser",
      description: "Generate a command in User/CreateUser"
    },
    {
      command: "dct create handler User/CreateUserHandler",
      description: "Generate a handler"
    },
    {
      command: "dct create query User/GetUser",
      description: "Generate a query"
    },
    {
      command: "dct create class Models/User",
      description: "Generate a class"
    },
    {
      command: "dct create interface Services/IUserService",
      description: "Generate an interface"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <Terminal className="w-16 h-16 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              dct
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A .NET global CLI tool to rapidly generate CQRS and Clean Architecture components
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <code className="text-green-400 font-mono text-lg">dotnet tool install -g dct</code>
                <button
                  onClick={() => copyToClipboard('dotnet tool install -g dct')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              <a
                href="https://www.nuget.org/packages/dct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Download className="w-5 h-5" />
                View on NuGet
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Streamline Your Development Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate CQRS components, enforce best practices, and maintain consistency across your .NET projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600">
              Get up and running with dct in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Install</h3>
              <p className="text-gray-600 mb-4">Install dct globally using the .NET CLI</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400 font-mono text-sm">dotnet tool install -g dct</code>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Initialize</h3>
              <p className="text-gray-600 mb-4">Initialize configuration and templates in your project</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400 font-mono text-sm">dct init</code>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Generate</h3>
              <p className="text-gray-600 mb-4">Start generating your CQRS components</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400 font-mono text-sm">dct create command User/CreateUser</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Usage Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how easy it is to generate various artifacts with dct
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-2 mt-1">
                    <Terminal className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-lg p-4 mb-3">
                      <code className="text-green-400 font-mono text-sm">{example.command}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{example.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fully Customizable
            </h2>
            <p className="text-xl text-gray-600">
              Tailor dct to your project's specific needs and coding standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-semibold text-gray-900">Configuration</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Customize generation by editing the <code className="bg-gray-200 px-2 py-1 rounded">.dct/.dct-config</code> file in your project root.
              </p>
              <div className="bg-gray-900 rounded-lg p-6">
                <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`{
  "templatePaths": {
    "command": "./dct-templates/command.scriban",
    "query": "./dct-templates/query.scriban",
    "handler": "./dct-templates/handler.scriban"
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-semibold text-gray-900">Templates</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Override default templates or add your own by placing them in the <code className="bg-gray-200 px-2 py-1 rounded">.dct/Templates/</code> directory.
              </p>
              <div className="space-y-3">
                {['command.scriban', 'handler.scriban', 'query.scriban', 'Your custom templates'].map((template, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-mono text-sm">{template}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contributing
            </h2>
            <p className="text-xl text-gray-600">
              Help make dct better for the .NET community
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <GitBranch className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Open Source & MIT Licensed
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              dct is open source and welcomes contributions. Fork the repository, make your changes, and submit a pull request to help improve the tool for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/mberrishdev/dct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <GitBranch className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.nuget.org/packages/dct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Star className="w-5 h-5" />
                Rate on NuGet
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Terminal className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">dct</h3>
            <p className="text-gray-400 mb-6">
              Streamline your .NET development with automated CQRS and Clean Architecture generation
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/mberrishdev/dct" className="text-gray-400 hover:text-white transition-colors">
                <GitBranch className="w-6 h-6" />
              </a>
              <a href="https://github.com/mberrishdev/dct" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Mikheil Berishvili. MIT License. 
                <a href="https://github.com/mberrishdev/dct/blob/master/LICENSE" className="text-blue-400 hover:text-blue-300 ml-1">
                  See LICENSE for details
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
