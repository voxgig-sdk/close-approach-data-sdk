# CloseApproachData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloseApproachDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloseApproachDataBaseFeature.new
    when "test"
      CloseApproachDataTestFeature.new
    else
      CloseApproachDataBaseFeature.new
    end
  end
end
